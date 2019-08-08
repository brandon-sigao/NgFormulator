import { NgfBaseControlConfig } from '../ngf-base-control-config';

export interface NgfTextControlConfig extends NgfBaseControlConfig {
    type: 'text';
    initialValue?: string;
}
