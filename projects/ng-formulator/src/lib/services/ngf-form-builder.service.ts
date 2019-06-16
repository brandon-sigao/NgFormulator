import { FormGroup, AbstractControl, ValidatorFn, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { NgfGroupConfig } from '../interfaces/group-interfaces/ngf-group-config';
import { NgfBaseControlConfig } from '../interfaces/control-interfaces/ngf-base-control-config';
import { NgfTextControl, NgfFormGroup } from '../classes';
import { NgfControlType, NgfValidatorTypeString } from '../types';
import { NgfTextControlConfig, NgfValidatorsConfig } from '../interfaces';
import { NgfValidator } from '../classes/ngf-validator';

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
        if (controlConfig.type === 'text') {
            const config = controlConfig as NgfTextControlConfig;
            const validators: NgfValidator[] = this.buildValidators(config.validators || {});
            return new NgfTextControl(config, validators);
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
