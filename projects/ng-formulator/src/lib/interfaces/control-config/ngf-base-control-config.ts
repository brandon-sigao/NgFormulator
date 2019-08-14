import { NgfControlTypeText, NgfSize } from '../../types';
import { NgfValidatorsConfig } from '../validator-config';

export interface NgfBaseControlConfig  {
    label: string;
    type: NgfControlTypeText;

    id?: string;
    initialValue?: any;
    size?: NgfSize;
    validators?: NgfValidatorsConfig;
}
