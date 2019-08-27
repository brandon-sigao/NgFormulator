import { NgfValidatorTypeString } from '../../types/ngf-validator-type-string';
export interface IValidated {
    validatorStrings: string[];
    hasValidator: (validatorString: NgfValidatorTypeString) => boolean;
    displayError: boolean;
}
