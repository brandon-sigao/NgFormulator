import { NgfControlTypeText } from '../types';
import { NgfValidatorsConfig } from './validator-interfaces';

export interface NgfBaseControlConfig {
    label: string;
    type: NgfControlTypeText;

    initialValue?: any;
    size?: 12 | 9 | 6 | 3;
    validators?: NgfValidatorsConfig;
}
