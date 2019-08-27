import {
    NgfTextControlConfig,
    NgfGroupConfig
} from 'ng-formulator';

export const address = {
    label: 'Address',
    type: 'group',
    size: 6,
    description: `Your address information is never distributed without your permission`,
    controls: {
        addressLine1: {
            label: 'Address Line 1',
            type: 'text',
            size: 6,
            validators: { required: true }
        } as NgfTextControlConfig,
        state: {
            label: 'State (dropdown)',
            type: 'text',
            size: 6
        } as NgfTextControlConfig,
        addressLine2: {
            label: 'addressLine2',
            type: 'text',
            size: 6
        } as NgfTextControlConfig,
        city: {
            label: 'City',
            type: 'text',
            size: 6,
            validators: { required: true }
        } as NgfTextControlConfig,
        zipCode: {
            label: 'Zip Code',
            type: 'text',
            size: 6,
            validators: { required: true }
        } as NgfTextControlConfig
    }
} as NgfGroupConfig;
