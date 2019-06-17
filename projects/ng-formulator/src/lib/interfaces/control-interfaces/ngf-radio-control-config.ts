import { NgfBaseControlConfig } from './ngf-base-control-config';
export interface NgfRadioControlConfig extends NgfBaseControlConfig {
    options: { [key: string]: string } | { [key: number]: string };
}
