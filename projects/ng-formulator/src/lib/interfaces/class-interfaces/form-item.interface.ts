import { NgfControlTypeText } from '../../types/ngf-control-type-string';
export interface IFormItem {
    id: string;
    label: string;
    size: 12 | 9 | 6 | 3;
    type: NgfControlTypeText;
}
