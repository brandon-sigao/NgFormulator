import { NgfBaseControl } from './ngf-base-control';
import { NgfTextAreaControlConfig } from '../interfaces';
import { NgfValidator } from './ngf-validator';
export class NgfTextAreaControl extends NgfBaseControl {
    constructor(config: NgfTextAreaControlConfig, validators?: NgfValidator[]) {
        super(config.initialValue || '', config, validators);
    }
}
