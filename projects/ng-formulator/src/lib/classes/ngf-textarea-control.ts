import { NgfBaseControl } from './ngf-base-control';
import { ValidatorFn } from '@angular/forms';
export class NgfTextAreaControl extends NgfBaseControl {
    constructor(initialValue: string, validators?: ValidatorFn[]) {
        super(initialValue, validators);
        this.type = 'textarea';
    }
}
