import { NgfControlType, NgfSize } from '../../types';

export interface IFormColumn {
    size: NgfSize;
    class: string;
    content: NgfControlType[];
}
