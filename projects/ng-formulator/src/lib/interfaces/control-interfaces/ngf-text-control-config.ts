import { NgfBaseControlConfig } from '../ngf-base-control-config';

export interface NgfTextControlConfig extends NgfBaseControlConfig {
    size?: 12 | 6 | 3;
    type: 'text';
    initialValue?: string;
}
