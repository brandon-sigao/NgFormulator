import { NgfTextControlConfig, NgfGroupConfig } from 'projects/ng-formulator/src/lib/interfaces';
export const FORM_DEF = {
    label: 'test',
    controls: {
        testControl: {
            label: 'contol label',
            type: 'text'
        } as NgfTextControlConfig
    },
    groups: {
        subGroup: {
            label: 'Sub Group',
            controls: {
                testSubControl: {
                    label: 'Sub Control',
                    type: 'text'
                } as NgfTextControlConfig
            }
        }
    }
} as NgfGroupConfig;
