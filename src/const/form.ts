import {
    NgfTextControlConfig,
    NgfGroupConfig, NgfMultiSelectControlConfig,
    NgfBooleanControlConfig,
    NgfTextAreaControlConfig,
    NgfNumberControlConfig
} from 'ng-formulator';
import { address } from './address';

export const FORM_DEF = {
    label: 'Contact Info',
    type: 'group',
    controls: {
        firstName: {
            label: 'First Name',
            type: 'text',
            size: 6,
            validators: { required: true }
        } as NgfTextControlConfig,
        outYou: {
            label: 'Tell us about yourself',
            type: 'textarea',
            size: 6,
            rows: 3,
        } as NgfTextAreaControlConfig,
        testControl2: {
            label: 'Last Name',
            type: 'text',
            size: 6,
            validators: { required: true }
        } as NgfTextControlConfig,
        numberControl: {
            label: 'Age',
            type: 'number',
            size: 6
        } as NgfNumberControlConfig,

        // SUBGROUP
        address,
        subGroup2: {
            label: 'Sub Group 2',
            type: 'group',
            controls: {
                subgroupd2Control: {
                    label: 'Sub Group 2 Control',
                    type: 'text',
                }
            }
        },
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
