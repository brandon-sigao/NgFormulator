import {
    NgfTextControlConfig,
    NgfGroupConfig, NgfMultiSelectControlConfig,
    NgfBooleanControlConfig,
    NgfTextAreaControlConfig
} from 'ng-formulator';
import { NgfNumberControl } from 'projects/ng-formulator/src/public-api';

export const FORM_DEF = {
    label: 'test',
    type: 'group',
    controls: {
        testControl: {
            label: 'Text Control Label',
            type: 'text',
            initialValue: 'BLAH',
            size: 6,
            validators: {
                required: true
            }
        } as NgfTextControlConfig,
        testAreaControl: {
            label: 'Text Area Control Label',
            type: 'textarea',
            size: 6,
            rows: 3,
            validators: {
                required: true
            }
        } as NgfTextAreaControlConfig,
        testControl2: {
            label: 'Text Control 2 Label',
            type: 'text',
            initialValue: 'BLAH',
            size: 6
        } as NgfTextControlConfig,
        numberControl: {
            label: 'Number Control Label',
            type: 'number',
            size: 12
        } as NgfNumberControl,
        subGroup: {
            label: 'Sub Group',
            type: 'group',
            size: 6,
            controls: {
                testSubControl: {
                    label: 'Sub Control',
                    type: 'text'
                } as NgfTextControlConfig
            }
        } as NgfGroupConfig,
        testMulti: {
            label: 'Test Multi',
            type: 'multi',
            size: 3,
            validators: {
                required: true
            },
            options: [
                {
                    label: 'Label 1',
                    type: 'boolean',
                    initialValue: false,
                    selectedValue: '2130000',
                },
                {
                    label: 'Label 2',
                    type: 'boolean',
                    initialValue: false,
                    selectedValue: '2130001',
                }
            ] as NgfBooleanControlConfig[]
        } as NgfMultiSelectControlConfig
    }
} as NgfGroupConfig;
