import { NgfControlTypeText } from '../../types/ngf-control-type-string';
import { NgfSize } from '../../types';
export interface IFormItem {
    id: string;
    label: string;
    size: NgfSize;
    type: NgfControlTypeText;
    rows: number;
}
