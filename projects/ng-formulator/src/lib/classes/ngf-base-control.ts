import { FormControl, ValidatorFn } from '@angular/forms';
import { NgfValidatorTypeString, NgfControlTypeText, NgfSize } from '../types';
import { IFormItem, IValidated } from '../interfaces';

export class NgfBaseControl extends FormControl implements IFormItem, IValidated {
    public id: string;
    public label: string;
    public size: NgfSize;
    public type: NgfControlTypeText;
    public validatorStrings: NgfValidatorTypeString[];
    public rows: number;

    constructor(initalValue: any, validators?: ValidatorFn[]) {
        super(initalValue, validators);
        this.rows = 1;
    }

    public hasValidator(validatorString: NgfValidatorTypeString): boolean {
        return this.validatorStrings.indexOf(validatorString) > -1;
    }
    public get displayError(): boolean {
        return this.invalid && (this.dirty || this.touched);
    }
}
