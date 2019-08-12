import { NgfBaseControlConfig } from './ngf-base-control-config';

export interface NgfNumberControlConfig extends NgfBaseControlConfig {
    type: 'number';
    initialValue?: number;
}
