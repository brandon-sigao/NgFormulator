import { NgfBaseValidatorConfig } from './ngf-base-validator-config';

export interface NgfPatternValidatorConfig extends NgfBaseValidatorConfig {
    pattern: RegExp;
}
