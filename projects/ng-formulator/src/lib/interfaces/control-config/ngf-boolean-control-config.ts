import { NgfBaseControlConfig } from './ngf-base-control-config';

export interface NgfBooleanControlConfig extends NgfBaseControlConfig {
    type: 'boolean';
    initialValue?: boolean;
    selectedValue?: string;
}
