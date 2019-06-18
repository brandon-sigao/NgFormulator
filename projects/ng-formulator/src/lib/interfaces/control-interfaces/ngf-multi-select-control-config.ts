import { NgfBaseControlConfig } from './ngf-base-control-config';
export interface NgfMultiSelectControlConfig extends NgfBaseControlConfig {
    options: { [key: string]: string } | { [key: number]: string };
    initialValue: string[] | number[];
}
