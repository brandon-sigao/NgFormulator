import { FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';
import { NgfControlType } from '../types';
import { Guid } from 'guid-typescript';

export class NgfFormGroup extends FormGroup {
    public label: string;
    public id: string;

    constructor(
        controls: { [key: string]: NgfControlType | NgfFormGroup },
        validatorOrOpts?: ValidatorFn[]) {
        super(controls, validatorOrOpts);
        this.id = Guid.create().toString();
    }

    public getControlsList(): NgfControlType[] {
        return Object.keys(this.controls)
            .filter(key => !(this.controls[key] instanceof FormGroup))
            .map(key => this.controls[key] as NgfControlType);
    }
    public getGroupsList(): NgfFormGroup[] {
        return Object.keys(this.controls)
            .filter(key => this.controls[key] instanceof FormGroup)
            .map(key => this.controls[key] as NgfFormGroup);
    }
}
