import { Guid } from 'guid-typescript';
import {
    NgfTextControl,
    NgfBaseControl,
    NgfMultiSelectControl,
    NgfTextAreaControl,
    NgfRadioControl,
    NgfBooleanControl
} from './../classes';
import {
    NgfTextControlConfig,
    NgfTextAreaControlConfig,
    NgfRadioControlConfig,
    NgfMultiSelectControlConfig,
    NgfBooleanControlConfig,
    NgfNumberControlConfig
} from '../interfaces/control-config';
import { NgfControlConfigType } from './../types/ngf-control-config-type';
import { Injectable } from '@angular/core';
import { NgfControlType, NgfValidatorTypeString } from '../types';
import { checkObject } from '../util/check-object.util';
import { NgfValidator } from './../classes';
import { NgfLoggerService } from './ngf-logger.service';
import { NgfNumberControl } from '../classes/ngf-number-control';

@Injectable()
export class NgfControlFactoryService {

    constructor(private logger: NgfLoggerService) { }

    public build(config: NgfControlConfigType, validators: NgfValidator[]): NgfControlType {

        // TODO: Get custom validator messages saved to controls
        switch (config.type) {
            case 'text':
                return this.buildTextControl(config as NgfTextControlConfig, validators);
            case 'textarea':
                return this.buildTextAreaControl(config as NgfTextAreaControlConfig, validators);
            case 'radio':
                return this.buildRadioControl(config as NgfRadioControlConfig, validators);
            case 'boolean':
                return this.buildBooleanControl(config as NgfBooleanControlConfig, validators);
            case 'multi':
                return this.buildMultiSelectControl(config as NgfMultiSelectControlConfig, validators);
            case 'number':
                return this.buildNumberControl(config as NgfNumberControlConfig, validators);
        }
        return null;
    }


    private buildTextControl(
        config: NgfTextControlConfig,
        ngfValidators: NgfValidator[]): NgfTextControl {

        const initialValue = config.initialValue || '';
        const ngValidators = ngfValidators.map(v => v.validatorFunction);
        const validatorStrings = ngfValidators.map(v => v.type);

        // build control
        const control = new NgfTextControl(initialValue, ngValidators);
        this.assignBaseControlValues(control, config, validatorStrings);

        return control;
    }

    private buildNumberControl(
        config: NgfNumberControlConfig,
        ngfValidators: NgfValidator[]): NgfTextControl {

        const initialValue = config.initialValue || null;
        const ngValidators = ngfValidators.map(v => v.validatorFunction);
        const validatorStrings = ngfValidators.map(v => v.type);

        // build control
        const control = new NgfNumberControl(initialValue, ngValidators);
        this.assignBaseControlValues(control, config, validatorStrings);

        return control;
    }

    private buildTextAreaControl(
        config: NgfTextAreaControlConfig,
        ngfValidators: NgfValidator[]): NgfTextAreaControl {

        const initialValue = config.initialValue || '';
        const ngValidators = ngfValidators.map(v => v.validatorFunction);
        const validatorStrings = ngfValidators.map(v => v.type);

        // build control
        const control = new NgfTextAreaControl(initialValue, ngValidators);
        this.assignBaseControlValues(control, config, validatorStrings);
        control.rows = (config.rows) ? config.rows : 1;
        return control;
    }

    private buildRadioControl(
        config: NgfRadioControlConfig,
        ngfValidators: NgfValidator[]): NgfRadioControl {

        const initialValue = config.initialValue || '';
        const ngValidators = ngfValidators.map(v => v.validatorFunction);
        const validatorStrings = ngfValidators.map(v => v.type);

        // build control
        const control = new NgfRadioControl(initialValue, ngValidators);
        this.assignBaseControlValues(control, config, validatorStrings);

        try {
            checkObject(config, 'options', `Config object for radio control has no options`);
            control.options = Object.keys(config.options)
                .map(key => {
                    return {
                        label: config.options[key],
                        value: key.toString(),
                        id: Guid.create().toString()
                    };
                });
            return control;
        } catch (e) {
            this.logger.error(e, config.label, null);
            return null;
        }
    }

    private buildBooleanControl(
        config: NgfBooleanControlConfig,
        ngfValidators: NgfValidator[]): NgfBooleanControl {
        const initialValue = config.initialValue || false;
        const ngValidators = ngfValidators.map(v => v.validatorFunction);
        const validatorStrings = ngfValidators.map(v => v.type);

        const control = new NgfBooleanControl(initialValue, ngValidators);
        control.selectedValue = (config.selectedValue) ? config.selectedValue : null;
        this.assignBaseControlValues(control, config, validatorStrings);
        return control;
    }

    private buildMultiSelectControl(
        config: NgfMultiSelectControlConfig,
        ngfValidators: NgfValidator[]): NgfMultiSelectControl {

        try {
            checkObject(config, 'options', `Config object for multi-select control has no options`);
            const options = (config.options as NgfBooleanControlConfig[])
                .map(op => this.buildBooleanControl(op, []));
            const isRequired = ngfValidators
                .some(v => v.type === 'required' || v.type === 'requiredTrue');
            const control = new NgfMultiSelectControl(options, isRequired);

            control.label = config.label;
            control.size = config.size || 12;
            control.id = this.generateId(config.id);

            return control;
        } catch (e) {
            this.logger.error(e, config.label, null);
            return null;
        }
    }

    private assignBaseControlValues(
        control: NgfBaseControl,
        config: NgfControlConfigType,
        validatorStrings: NgfValidatorTypeString[]): void {

        control.label = config.label;
        control.size = config.size || 12;
        control.validatorStrings = validatorStrings || null;
        control.id = this.generateId(config.id);
    }

    private generateId(configId: string): string {
        if (configId !== undefined && configId !== null && configId !== '') {
            return configId;
        } else {
            return Guid.create().toString();
        }
    }
}
