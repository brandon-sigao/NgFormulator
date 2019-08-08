import { NgfBaseControlConfig } from '../ngf-base-control-config';
import { NgfBooleanControlConfig } from './ngf-boolean-control-config';
export interface NgfMultiSelectControlConfig extends NgfBaseControlConfig {
    options: NgfBooleanControlConfig[];
    type: 'multi';
}
