import { NgfBaseControl } from './ngf-base-control';
import { ValidatorFn } from '@angular/forms';

export class NgfBooleanControl extends NgfBaseControl {
    public selectedValue: string;
    constructor(initialValue: boolean, validators?: ValidatorFn[]) {
        super(initialValue, validators);
        this.type = 'boolean';
    }
}
