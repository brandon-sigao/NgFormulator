import { FormGroup } from '@angular/forms';
import { NgfControlType } from '../types';
import { IFormItem } from '../interfaces';

export class NgfFormGroup extends FormGroup implements IFormItem {
    public label: string;
    public id: string;
    public type: 'group';
    public size: 12 | 9 | 6 | 3;
    constructor() {
        super({}, null);
        this.type = 'group';
    }

    public getControlsAsArray(): NgfControlType[] {
        return Object.keys(this.controls)
            .map(key => this.controls[key] as NgfControlType);
    }
}
