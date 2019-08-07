import { NgfTextControlConfig, NgfGroupConfig } from 'projects/ng-formulator/src/lib/interfaces';
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
        } as NgfGroupConfig
    }
} as NgfGroupConfig;
