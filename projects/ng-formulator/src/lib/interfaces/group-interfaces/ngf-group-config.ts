import { NgfBaseControlConfig } from './../ngf-base-control-config';
import { NgfControlConfigType } from '../../types/ngf-control-config-type';

export interface NgfGroupConfig extends NgfBaseControlConfig {
    label: string;
    id?: string;
    controls?: {
        [key: string]: NgfControlConfigType;
    };
}
