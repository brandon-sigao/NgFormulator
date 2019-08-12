import {
    NgfTextControlConfig,
    NgfTextAreaControlConfig, NgfGroupConfig,
    NgfBooleanControlConfig, NgfNumberControlConfig
} from './../interfaces';
import { NgfRadioControlConfig } from '../interfaces/control-config/ngf-radio-control-config';
import { NgfMultiSelectControlConfig } from '../interfaces/control-config/ngf-multi-select-control-config';

export type NgfControlConfigType =
    NgfTextControlConfig |
    NgfTextAreaControlConfig |
    NgfRadioControlConfig |
    NgfMultiSelectControlConfig |
    NgfBooleanControlConfig |
    NgfNumberControlConfig |
    NgfGroupConfig;
