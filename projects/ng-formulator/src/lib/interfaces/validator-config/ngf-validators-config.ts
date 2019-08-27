import { NgfBaseValidatorConfig } from './ngf-base-validator-config';
import { NgfNumberValidatorConfig } from './ngf-number-validator-config';
import { NgfPatternValidatorConfig } from './ngf-pattern-validator-config';

export interface NgfValidatorsConfig {
    required?: NgfBaseValidatorConfig;
    max?: NgfNumberValidatorConfig;
    min?: NgfNumberValidatorConfig;
    maxLength?: NgfNumberValidatorConfig;
    minLength?: NgfNumberValidatorConfig;
    pattern?: NgfPatternValidatorConfig;
    requiredTrue?: NgfBaseValidatorConfig;
}
