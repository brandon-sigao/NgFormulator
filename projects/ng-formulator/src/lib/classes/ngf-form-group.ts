import { FormGroup } from '@angular/forms';
import { NgfControlType } from '../types';
import { IFormItem } from '../interfaces';

export class NgfFormGroup extends FormGroup implements IFormItem {
    public label: string;
    public id: string;
    public size: 12;

    readonly type: 'group';
    readonly rows: number;

    constructor() {
        super({}, null);
        this.type = 'group';
        this.rows = null;
        this.size = 12;
    }

    public getControlsAsArray(): NgfControlType[] {
        return Object.keys(this.controls)
            .map(key => this.controls[key] as NgfControlType);
    }
}
