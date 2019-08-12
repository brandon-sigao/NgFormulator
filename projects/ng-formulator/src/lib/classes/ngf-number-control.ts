import { NgfBaseControl } from './ngf-base-control';
import { ValidatorFn } from '@angular/forms';

export class NgfNumberControl extends NgfBaseControl {
    constructor(initialValue: number, validators?: ValidatorFn[]) {
        super(initialValue, validators);
        this.type = 'number';
    }
}
