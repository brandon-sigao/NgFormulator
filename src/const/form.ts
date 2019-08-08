import {
    NgfTextControlConfig,
    NgfGroupConfig, NgfMultiSelectControlConfig,
    NgfBooleanControlConfig
} from 'projects/ng-formulator/src/lib/interfaces';
export const FORM_DEF = {
    label: 'test',
    type: 'group',
    controls: {
        testControl: {
            label: 'contol label',
            type: 'text',
            initialValue: 'BLAH',
            validators: {
                required: true
            }
        } as NgfTextControlConfig,
        subGroup: {
            label: 'Sub Group',
            type: 'group',
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
