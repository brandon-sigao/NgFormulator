import { NgfTextAreaControl } from './../classes/ngf-textarea-control';
import { FormGroup, AbstractControl, ValidatorFn, Validators } from '@angular/forms';
import { Injectable, Injector } from '@angular/core';
import * as _ from 'lodash';
import { NgfGroupConfig } from '../interfaces/group-interfaces/ngf-group-config';
import { NgfBaseControlConfig } from '../interfaces/control-interfaces/ngf-base-control-config';
import { NgfTextControl, NgfFormGroup, NgfRadioControl } from '../classes';
import { NgfControlType, NgfValidatorTypeString } from '../types';
import { NgfTextControlConfig, NgfValidatorsConfig, NgfTextAreaControlConfig } from '../interfaces';
import { NgfValidator } from '../classes/ngf-validator';
import { NgfRadioControlConfig } from '../interfaces/control-interfaces/ngf-radio-control-config';
import { NgfFormBuilderReporterService } from './ngf-form-builder-reporter.service';
import { checkObject } from '../util/check-object.util';

@Injectable()
export class NgfFormBuilderService {

    constructor() { }

    public group(group: NgfGroupConfig): NgfFormGroup {
        const controls = (group.controls) ? this.buildControls(group.controls) : {};
        if (group.groups) {
            this.addGroupsToControls(group.groups, controls);
        }
        return new NgfFormGroup(controls);
    }

    private buildControl(controlConfig: NgfBaseControlConfig): NgfControlType {
        const validators: NgfValidator[] = this.buildValidators(controlConfig.validators || {});
        switch (controlConfig.type) {
            case 'text':
                return new NgfTextControl(controlConfig as NgfTextControlConfig, validators);
            case 'textarea':
                return new NgfTextAreaControl(controlConfig as NgfTextAreaControlConfig, validators);
            case 'radio':
                checkObject(controlConfig, 'options', `Config option for radio control has no options`);
                return new NgfRadioControl(controlConfig as NgfRadioControlConfig, validators);
        }
    }
    private buildControls(controls: { [key: string]: NgfBaseControlConfig }): { [key: string]: AbstractControl } {
        const mappedControls = {};
        Object.keys(controls).forEach(key => {
            mappedControls[key] = this.buildControl(controls[key]);
        });

        return mappedControls;
    }
    private addGroupsToControls(
        groups: { [key: string]: NgfGroupConfig },
        controls: { [key: string]: AbstractControl }): void {
        Object.keys(groups).forEach(key => {
            controls[key] = this.group(groups[key]);
        });
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
