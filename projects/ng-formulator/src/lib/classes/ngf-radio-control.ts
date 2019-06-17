import { NgfBaseControl } from './ngf-base-control';
import { FormControl } from '@angular/forms';
import { NgfRadioControlConfig } from '../interfaces/control-interfaces/ngf-radio-control-config';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

export class NgfRadioControl extends NgfBaseControl {
    private options: { [key: string]: string } | { [key: number]: string };
    constructor(config: NgfRadioControlConfig, validators?) {
        super(config.initialValue || '', config, validators);
        this.options = config.options;
    }

    public getOptionLabel(value: string | number): string {
        const key = value.toString();
        return this.options[key] || null;
    }
    public getOptionValue(label: string): string {
        const match = Object.keys(this.options)
            .find(key => this.options[key] === label);
        return match || null;
    }
}
