import { FormGroup } from '@angular/forms';
import { NgfControlType } from '../types';

export class NgfFormGroup extends FormGroup {
    public label: string;
    public id: string;
    public type: 'group';
    constructor() {
        super({}, null);
    }

    public getAllControls(): NgfControlType[] {
        return Object.keys(this.controls)
            .map(key => this.controls[key] as NgfControlType);
    }
}
