import { NgfBaseControlConfig } from '../control-config/ngf-base-control-config';
import { NgfControlConfigType } from '../../types/ngf-control-config-type';

export interface NgfGroupConfig extends NgfBaseControlConfig {
    type: 'group';
    controls: {
        [key: string]: NgfControlConfigType;
    };
    description?: string;
}
