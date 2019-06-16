import { NgfValidatorTypeString } from './../types/ngf-validator-type-string';
import { FormControl } from '@angular/forms';
import { NgfTextAreaControlConfig } from '../interfaces';
export class NgfTextAreaControl extends FormControl {

    public label: string;
    public size: number;
    public validatorStrings: NgfValidatorTypeString[];
    constructor(config: NgfTextAreaControlConfig, validators) {
        super(config.initialValue || '', validators);
        this.label = config.label;
        this.size = config.size;
        this.validatorStrings = config.validatorStrings;
    }
}
