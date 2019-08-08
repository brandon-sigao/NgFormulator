import { NgfTextControlConfig, NgfTextAreaControlConfig, NgfGroupConfig, NgfBooleanControlConfig } from './../interfaces';
import { NgfRadioControlConfig } from '../interfaces/control-interfaces/ngf-radio-control-config';
import { NgfMultiSelectControlConfig } from '../interfaces/control-interfaces/ngf-multi-select-control-config';

export type NgfControlConfigType =
    NgfTextControlConfig |
    NgfTextAreaControlConfig |
    NgfRadioControlConfig |
    NgfMultiSelectControlConfig |
    NgfBooleanControlConfig |
    NgfGroupConfig;
