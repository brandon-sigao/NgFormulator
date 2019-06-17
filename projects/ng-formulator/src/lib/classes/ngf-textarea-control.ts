import { NgfBaseControl } from './ngf-base-control';
import { FormControl } from '@angular/forms';
import { NgfTextAreaControlConfig } from '../interfaces';
import { NgfValidator } from './ngf-validator';
export class NgfTextAreaControl extends NgfBaseControl {
    constructor(config: NgfTextAreaControlConfig, validators?: NgfValidator[]) {
        super(config.initialValue || '', config, validators);
    }
}
