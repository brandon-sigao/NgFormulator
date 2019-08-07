import { NgfGroupConfig } from './../interfaces/group-interfaces/ngf-group-config';
import { NgfControlConfigType } from './../types/ngf-control-config-type';
import { NgfTextAreaControl } from './../classes/ngf-textarea-control';
import { Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { NgfTextControl, NgfFormGroup, NgfRadioControl, NgfMultiSelectControl } from '../classes';
import { NgfControlType } from '../types';
import { NgfTextControlConfig, NgfValidatorsConfig, NgfTextAreaControlConfig } from '../interfaces';
import { NgfValidator } from '../classes/ngf-validator';
import { NgfRadioControlConfig } from '../interfaces/control-interfaces/ngf-radio-control-config';
import { checkObject } from '../util/check-object.util';
import { NgfMultiSelectControlConfig } from '../interfaces/control-interfaces/ngf-multi-select-control-config';
import { Guid } from 'guid-typescript';

@Injectable()
export class NgfFormBuilderService {

    constructor() { }

    public build(groupConfig: NgfGroupConfig): NgfFormGroup {

        // Create ID if none provided
        groupConfig.id = groupConfig.id || Guid.create().toString();

        // Validate that group has label and controls
        const valid = this.validateConfig(groupConfig);

        const group = new NgfFormGroup();

        if (valid) {
            group.id = groupConfig.id;
            group.type = 'group';
            this.generateControls(groupConfig.controls)
                .forEach(val => group.addControl(val.prop, val.control));
        }

        return group;
    }


    private validateConfig(config: NgfGroupConfig): boolean {
        if (!config.label || config.label.length === 0) {
            console.warn(`Label for group ${config.id} is missing`);
        }
        if (!config.controls || Object.keys(config.controls).length === 0) {
            console.error(`No controls found for group ${config.id}.  Cannot create group.`);
            return false;
        }
        return true;
    }

    private generateControls(controls: { [key: string]: NgfControlConfigType }): { prop: string, control: NgfControlType }[] {
        if (controls) {
            return Object.keys(controls)
                .map((prop: string) => {
                    const controlConfig: NgfControlConfigType = controls[prop];
                    const control = this.parseControl(controlConfig);
                    return { prop, control };
                });
        } else {
            console.error('No controls found!');
        }
    }

    private parseControl(config: NgfControlConfigType): NgfControlType {
        const validators: NgfValidator[] = this.buildValidators(config.validators || {});
        switch (config.type) {
            case 'text':
                return new NgfTextControl(config as NgfTextControlConfig, validators);
            case 'textarea':
                return new NgfTextAreaControl(config as NgfTextAreaControlConfig, validators);
            case 'radio':
                checkObject(config, 'options', `Config object for radio control has no options`);
                return new NgfRadioControl(config as NgfRadioControlConfig, validators);
            case 'multi':
                checkObject(config, 'options', `Config object for multi-select control has no options`);
                return new NgfMultiSelectControl(config as NgfMultiSelectControlConfig);
            case 'group':
                checkObject(config, 'controls', `Config object for group control has no controls`);
                return this.build(config);
        }
        console.warn('All configs objects should have type properties.  Attempting to cast as Group.');

        try {
            checkObject(config, 'controls', '');
            console.warn('"controls" property found on config.  Treating as group.');
            return this.build(config);
        } catch (e) {
            console.error('Could not cast config object as any known control.');
        }
    }

    private buildValidators(validatorGroup: NgfValidatorsConfig): NgfValidator[] {
        return Object.keys(validatorGroup)
            .map(key => {
                const message = validatorGroup[key].customMessage || null;
                const definition = validatorGroup[key];
                switch (key) {
                    case 'required':
                        return new NgfValidator(key, Validators.required, message);
                    case 'max':
                        return new NgfValidator(key, Validators.max(definition.amount), message);
                    case 'min':
                        return new NgfValidator(key, Validators.min(definition.amount), message);
                    case 'maxLength':
                        return new NgfValidator(key, Validators.maxLength(definition.amount), message);
                    case 'minLength':
                        return new NgfValidator(key, Validators.minLength(definition.amount), message);
                    case 'minLength':
                        return new NgfValidator(key, Validators.pattern(RegExp(definition.pattern)), message);
                    case 'requiredTrue':
                        return new NgfValidator(key, Validators.pattern, message);
                }
            });
    }
}
