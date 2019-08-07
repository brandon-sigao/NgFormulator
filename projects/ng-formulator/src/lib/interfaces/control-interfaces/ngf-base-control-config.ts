import { NgfControlTypeText } from '../../types';
import { NgfValidatorsConfig } from '../validator-interfaces';

export interface NgfBaseControlConfig {
    label: string;
    initialValue?: any;
    size?: number;
    type: NgfControlTypeText;
    validators?: NgfValidatorsConfig;
}
