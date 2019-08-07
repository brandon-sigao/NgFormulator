import { NgfValidatorsConfig } from './../interfaces/validator-interfaces/ngf-validators-config';
import { NgfTextAreaControl } from './ngf-textarea-control';
import { NgfRadioControl } from './ngf-radio-control';
import { NgfMultiSelectControl } from './ngf-multi-select-control';
import { NgfTextControl } from './ngf-text-control';
import { FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { NgfControlType } from '../types';
import { Guid } from 'guid-typescript';
import { NgfGroupConfig, NgfTextControlConfig, NgfTextAreaControlConfig } from '../interfaces';
import { NgfControlConfigType } from '../types/ngf-control-config-type';
import { checkObject } from '../util/check-object.util';
import { NgfMultiSelectControlConfig } from '../interfaces/control-interfaces/ngf-multi-select-control-config';
import { NgfRadioControlConfig } from '../interfaces/control-interfaces/ngf-radio-control-config';
import { NgfValidator } from './ngf-validator';

export class NgfFormGroup extends FormGroup {
    public label: string;
    public id: string;

    constructor(
        config: NgfGroupConfig,
        validatorOrOpts?: ValidatorFn[]) {
        super({}, validatorOrOpts);

        // Assing ID if none exists
        if (!config.id) {
            this.id = Guid.create().toString();
        }
        const isValid = this.validateConfig(config);
        if (isValid) {
            this.generateControls(config.controls);
        }
    }
    private validateConfig(config: NgfGroupConfig): boolean {
        if (!config.label || config.label.length === 0) {
            console.warn(`Label for group ${this.id} is missing`);
        }
        if (!config.controls || Object.keys(config.controls).length === 0) {
            console.error(`No controls found for group ${this.id}.  Cannot create group.`);
            return false;
        }
        return true;
    }

    private generateControls(controls: { [key: string]: NgfControlConfigType }) {
        if (controls) {
            Object.keys(controls).forEach((key: string) => {
                const controlConfig: NgfControlConfigType = controls[key];
                const control = this.parseControl(controlConfig);
                this.addControl(key, control);
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
                return new NgfFormGroup(config as NgfGroupConfig);
        }
        console.warn('All configs objects should have type properties.  Attempting to cast as Group.');

        try {
            checkObject(config, 'controls', '');
            console.warn('"controls" property found on config.  Treating as group.');
            return new NgfFormGroup(config as NgfGroupConfig);
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

    public getControlsList(): NgfControlType[] {
        return Object.keys(this.controls)
            .filter(key => !(this.controls[key] instanceof FormGroup))
            .map(key => this.controls[key] as NgfControlType);
    }
    public getGroupsList(): NgfFormGroup[] {
        return Object.keys(this.controls)
            .filter(key => this.controls[key] instanceof FormGroup)
            .map(key => this.controls[key] as NgfFormGroup);
    }


}
