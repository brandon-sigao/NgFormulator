import { NgfBaseControlConfig } from '../interfaces/control-interfaces/ngf-base-control-config';
import { FormArray, FormControl } from '@angular/forms';

export class NgfBaseArrayControl extends FormArray {
    public label: string;
    public size: number;
    public required: boolean;

    constructor(initalValue: any[], config: NgfBaseControlConfig) {

        super(initalValue);

        this.label = config.label;
        this.size = config.size || 12;
        // tslint:disable-next-line:no-string-literal
        this.required = (config.validators) ? (config.validators['required'] !== undefined) : false;
    }
    public getControlList(): FormControl[] {
        return this.controls as FormControl[];
    }
    public hasSelected(): boolean {
        return this.controls.some(control => control.value === true);
    }
}
