import { NgfControlTypeText } from '../../types';
import { NgfValidatorsConfig } from '../validator-config';

export interface NgfBaseControlConfig  {
    label: string;
    type: NgfControlTypeText;

    id?: string;
    initialValue?: any;
    size?: 12 | 9 | 6 | 3;
    validators?: NgfValidatorsConfig;
}
