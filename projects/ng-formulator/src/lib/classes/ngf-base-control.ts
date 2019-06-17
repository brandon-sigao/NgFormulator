import { NgfBaseControlConfig } from './../interfaces/control-interfaces/ngf-base-control-config';
import { FormControl } from '@angular/forms';
import { NgfValidatorTypeString } from '../types';
import { NgfValidator } from './ngf-validator';

export class NgfBaseControl extends FormControl {
    public label: string;
    public size: number;
    public validatorStrings: NgfValidatorTypeString[];

    constructor(initalValue: any, config: NgfBaseControlConfig, validators?: NgfValidator[]) {
        let ngValidators;
        let typeList;
        if (validators) {
            ngValidators = validators.map(v => v.validatorFunction);
            typeList = validators.map(v => v.type);
        }

        super(initalValue, ngValidators);

        this.label = config.label;
        this.size = config.size || 12;
        this.validatorStrings = typeList || null;
    }

    public hasValidator(validatorString: NgfValidatorTypeString): boolean {
        return this.validatorStrings.indexOf(validatorString) > -1;
    }
}
