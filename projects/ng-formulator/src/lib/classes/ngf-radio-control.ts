import { NgfBaseControl } from './ngf-base-control';
import { ISelectOption } from './../interfaces/class-interfaces/select-option.interface';
import { ValidatorFn } from '@angular/forms';

export class NgfRadioControl extends NgfBaseControl {

    public options: ISelectOption[];

    constructor(initialValue: string, validators?: ValidatorFn[]) {
        super(initialValue, validators);
        this.type = 'radio';
    }

    public getOptionLabel(value: string | number): string {
        const option = this.options.find(o => o.value === value.toString());
        return (option) ? option.label : null;
    }

    public getOptionValue(label: string): string {
        const option = this.options.find(o => o.label === label);
        return (option) ? option.value : null;
    }
}
