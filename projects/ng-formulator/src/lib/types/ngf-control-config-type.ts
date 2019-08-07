import { NgfTextControlConfig, NgfTextAreaControlConfig, NgfBaseControlConfig, NgfGroupConfig } from './../interfaces';
import { NgfRadioControlConfig } from '../interfaces/control-interfaces/ngf-radio-control-config';

export type NgfControlConfigType =
    NgfTextControlConfig |
    NgfTextAreaControlConfig |
    NgfRadioControlConfig |
    NgfGroupConfig;
