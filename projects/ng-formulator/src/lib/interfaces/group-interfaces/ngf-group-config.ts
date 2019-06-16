import { NgfControlType } from '../../types/ngf-control-type';
import { NgfControlConfigType } from '../../types/ngf-control-config-type';

export interface NgfGroupConfig {
    label: string;
    controls?: {
        [key: string]: NgfControlConfigType;
    };
    groups?: {
        [key: string]: NgfGroupConfig;
    };
}
