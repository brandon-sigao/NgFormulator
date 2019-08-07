import { NgfBaseControlConfig } from '../ngf-base-control-config';

export interface NgfTextAreaControlConfig extends NgfBaseControlConfig {
    size?: 12 | 6;
    initialValue: string;
    type: 'textarea';
}
