import { NgfTextControlConfig } from '../interfaces/control-interfaces/ngf-text-control-config';
import { NgfBaseControl } from './ngf-base-control';
import { NgfValidator } from './ngf-validator';

export class NgfTextControl extends NgfBaseControl {
    constructor(config: NgfTextControlConfig, validators: NgfValidator[]) {
        super(config.initialValue || '', config, validators);
    }
}

// export class NgfTextControl extends NgfBaseControl {


//     public validatorStrings: NgfValidatorTypeString[];
//     constructor(config: NgfTextControlConfig, validators) {
//         super(config.initialValue || '', validators);
//         this.label = config.label;
//         this.size = config.size;
//         this.validatorStrings = config.validatorStrings;
//     }
// }
