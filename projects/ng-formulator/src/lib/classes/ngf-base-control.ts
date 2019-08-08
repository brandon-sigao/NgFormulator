import { FormControl, ValidatorFn } from '@angular/forms';
import { NgfValidatorTypeString, NgfControlTypeText } from '../types';

export class NgfBaseControl extends FormControl {
    public label: string;
    public size: number;
    public validatorStrings: NgfValidatorTypeString[];
    public type: NgfControlTypeText;

    constructor(initalValue: any, validators?: ValidatorFn[]) {
        super(initalValue, validators);
    }

    public hasValidator(validatorString: NgfValidatorTypeString): boolean {
        return this.validatorStrings.indexOf(validatorString) > -1;
    }
    public get displayError(): boolean {
        return this.invalid && (this.dirty || this.touched);
    }
}
