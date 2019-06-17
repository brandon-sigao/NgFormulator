import { NgfTextControlConfig } from '../interfaces/control-interfaces/ngf-text-control-config';
import { NgfBaseControl } from './ngf-base-control';
import { NgfValidator } from './ngf-validator';

export class NgfTextControl extends NgfBaseControl {
    constructor(config: NgfTextControlConfig, validators?: NgfValidator[]) {
        super(config.initialValue || '', config, validators);
    }
}
