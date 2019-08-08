import { FormControl, ValidatorFn } from '@angular/forms';
import { NgfValidatorTypeString, NgfControlTypeText } from '../types';

export class NgfBaseControl extends FormControl {
    public label: string;
    public size: number;
    public validatorStrings: NgfValidatorTypeString[];
    public type: NgfControlTypeText;

    constructor(initalValue: any, validators?: ValidatorFn[]) {
        // let ngValidators;
        // let typeList;
        // if (validators) {
        //     ngValidators = validators.map(v => v.validatorFunction);
        //     typeList = validators.map(v => v.type);
        // }

        super(initalValue, validators);

        // this.label = config.label;
        // this.size = config.size || 12;
        // this.type = config.type;
        // this.validatorStrings = typeList || null;
    }

    public hasValidator(validatorString: NgfValidatorTypeString): boolean {
        return this.validatorStrings.indexOf(validatorString) > -1;
    }
    public get displayError(): boolean {
        return this.invalid && (this.dirty || this.touched);
    }
}
