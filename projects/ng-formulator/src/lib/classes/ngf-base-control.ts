import { FormControl, ValidatorFn } from '@angular/forms';
import { NgfValidatorTypeString, NgfControlTypeText } from '../types';
import { IFormItem, IValidated } from '../interfaces';

export class NgfBaseControl extends FormControl implements IFormItem, IValidated {
    public id: string;
    public label: string;
    public size: 12 | 9 | 6 | 3;
    public type: NgfControlTypeText;
    public validatorStrings: NgfValidatorTypeString[];

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
