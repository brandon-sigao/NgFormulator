import { IFormRow } from './../interfaces/class-interfaces/form-row.interface';
import { NgfTextControl } from './../classes/ngf-text-control';
import { TestBed } from '@angular/core/testing';
import { inject } from '@angular/core/testing';
import { NgfGroupService } from '../services/ngf-group.service';
import {
    NgfTextAreaControlConfig,
    NgfTextControlConfig, NgfNumberControlConfig,
    NgfGroupConfig, NgfBooleanControlConfig, NgfMultiSelectControlConfig, IFormColumn
} from '../interfaces';
import { NgfTextAreaControl } from '../classes';
import { NgfControlType } from '../types';

describe('NgfGroupService', () => {

    const FORM_DEF = {
        label: 'test',
        type: 'group',
        controls: {
            testControl: {
                label: 'Text Control Label',
                type: 'text',
                size: 6,
            } as NgfTextControlConfig,
            testAreaControl: {
                label: 'Text Area Control Label',
                type: 'textarea',
                size: 9,
                rows: 3,
            } as NgfTextAreaControlConfig,
            testControl2: {
                label: 'Text Control 2 Label',
                type: 'text',
                size: 6
            } as NgfTextControlConfig,
            numberControl: {
                label: 'Number Control Label',
                type: 'number',
                size: 12
            } as NgfNumberControlConfig,
            subGroup: {
                label: 'Sub Group',
                type: 'group',
                controls: {
                    testSubControl: {
                        label: 'Sub Control',
                        type: 'text',
                        size: 6
                    } as NgfTextControlConfig
                }
            } as NgfGroupConfig,
            testMulti: {
                label: 'Test Multi',
                type: 'multi',
                size: 3,
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

    beforeEach(() => TestBed.configureTestingModule({
        providers: [
            NgfGroupService
        ]
    }));

    it('should be created',
        inject([NgfGroupService], (service: NgfGroupService) => {
            expect(service).toBeDefined();
        }));
    it('should make new rows',
        inject([NgfGroupService], (service: NgfGroupService) => {

            const control1 = new NgfTextControl('');
            control1.size = 3;
            const control2 = new NgfTextControl('');
            control2.size = 6;
            const control3 = new NgfTextControl('');
            control3.size = 6;

            const testData = [
                control1,
                control2,
                control3
            ] as NgfControlType[];

            const result: IFormRow[] = service.buildRowList(testData);

            expect(result.length).toEqual(2);
            expect(result[0].columns.length).toEqual(2);
            expect(result[1].columns.length).toEqual(1);
        }));

    it('should fit controls into available slots in current columns',
        inject([NgfGroupService], (service: NgfGroupService) => {

            const control1 = new NgfTextControl('');
            control1.size = 3;
            const control2 = new NgfTextAreaControl('');
            control2.size = 6;
            control2.rows = 2;
            const control3 = new NgfTextControl('');
            control3.size = 3;

            // second row
            const control4 = new NgfTextControl('');
            control3.size = 3;
            const control5 = new NgfTextControl('');
            control3.size = 3;

            const control6 = new NgfTextControl('');
            control6.size = 6;

            const testData = [
                control1,
                control2,
                control3,
                control4,
                control5,
                control6
            ] as NgfControlType[];

            const result: IFormRow[] = service.buildRowList(testData);
            // row 1
            expect(result.length).toEqual(2);
            expect(result[0].columns.length).toEqual(3);
            expect(result[0].columns[0].content.length).toEqual(2);
            expect(result[0].columns[1].content.length).toEqual(1);
            expect(result[0].columns[2].content.length).toEqual(2);

            // row 2
            expect(result[1].columns.length).toEqual(1);
            expect(result[1].columns[0].content.length).toEqual(1);
        }));
    it('should fit controls into available slots with multiple multi-line controls in 1 row',
        inject([NgfGroupService], (service: NgfGroupService) => {

            // first
            const control1 = new NgfTextControl('');
            control1.size = 3;
            const control2 = new NgfTextAreaControl('');
            control2.size = 6;
            control2.rows = 2;
            const control3 = new NgfTextAreaControl('');
            control3.size = 3;
            control3.rows = 3;

            // second row
            const control4 = new NgfTextControl('');
            control3.size = 3;

            // third
            const control5 = new NgfTextControl('');
            control3.size = 3;
            const control6 = new NgfTextControl('');
            control6.size = 6;

            // new row
            const control7 = new NgfTextControl('');
            control7.size = 6;

            const testData = [
                control1,
                control2,
                control3,
                control4,
                control5,
                control6,
                control7
            ] as NgfControlType[];

            const result: IFormRow[] = service.buildRowList(testData);
            console.log(result);
            // row 1
            expect(result.length).toEqual(2);
            expect(result[0].columns.length).toEqual(3);
            expect(result[0].columns[0].content.length).toEqual(3);
            expect(result[0].columns[1].content.length).toEqual(2);
            expect(result[0].columns[2].content.length).toEqual(1);

            // row 2
            expect(result[1].columns.length).toEqual(1);
            expect(result[1].columns[0].content.length).toEqual(1);
        }));
    it('should get row height',
        inject([NgfGroupService], (service: NgfGroupService) => {
            const testData =
                {
                    columns: [
                        {
                            content: [
                                { rows: 1 },
                                { rows: 2 }
                            ]
                        },
                        {
                            content: [
                                { rows: 1 },
                                { rows: 1 }
                            ]
                        }
                    ]
                } as IFormRow;

            const result: number = service.getRowHeight(testData);
            expect(result).toEqual(3);
        }));
    it('should get column height',
        inject([NgfGroupService], (service: NgfGroupService) => {
            const result1: number = service.getColumnHeight({
                content: [
                    { rows: 1 },
                    { rows: 2 }
                ]
            } as IFormColumn);
            expect(result1).toEqual(3);

            const result2: number = service.getColumnHeight({
                content: [
                    { rows: 1 },
                    { rows: 1 }
                ]
            } as IFormColumn);
            expect(result2).toEqual(2);
            const result3: number = service.getColumnHeight({
                content: [{ rows: 1 }]
            } as IFormColumn);
            expect(result3).toEqual(1);
        }));
});
