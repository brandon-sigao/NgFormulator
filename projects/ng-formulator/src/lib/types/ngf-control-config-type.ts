import { NgfTextControlConfig, NgfTextAreaControlConfig, NgfBaseControlConfig, NgfGroupConfig } from './../interfaces';
import { NgfRadioControlConfig } from '../interfaces/control-interfaces/ngf-radio-control-config';
import { NgfMultiSelectControlConfig } from '../interfaces/control-interfaces/ngf-multi-select-control-config';

export type NgfControlConfigType =
    NgfTextControlConfig |
    NgfTextAreaControlConfig |
    NgfRadioControlConfig |
    NgfMultiSelectControlConfig |
    NgfGroupConfig;
