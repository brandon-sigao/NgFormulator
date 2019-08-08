import { ValidatorFn } from '@angular/forms';
import { NgfValidatorTypeString } from '../types';

export class NgfValidator {
    constructor(
        public type: NgfValidatorTypeString,
        public validatorFunction: ValidatorFn,
        public customMessage?: string) { }
}
