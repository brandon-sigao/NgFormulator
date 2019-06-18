import { NgfBaseControl } from './ngf-base-control';
import { NgfRadioControlConfig } from '../interfaces/control-interfaces/ngf-radio-control-config';
import { NgfValidator } from './ngf-validator';
export class NgfRadioControl extends NgfBaseControl {
    public options: { [key: string]: string } | { [key: number]: string };
    constructor(config: NgfRadioControlConfig, validators?: NgfValidator[]) {
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

    public getOptionsAsList(): { value: string, label: string }[] {
        return Object.keys(this.options).map(key => ({ value: key, label: this.options[key] }));
    }
}
