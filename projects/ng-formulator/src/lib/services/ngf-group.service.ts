import { Injectable } from '@angular/core';
import { NgfControlType, NgfSize } from '../types';
import { IFormColumn, IFormRow } from '../interfaces';
import { checkObject } from './../util';

@Injectable()
export class NgfGroupService {

    constructor() { }

    public buildRowList(controls: NgfControlType[]): IFormRow[] {

        const rowList: IFormRow[] = [];
        rowList.push(this.newRow());

        controls.forEach((control) => {
            if (control.type === 'group') {
                // Make new row for group, skip over sub controls
                const groupRow = this.newRow([this.newColumn(control.size, [control])]);
                rowList.push(groupRow);
            } else {
                // try to fit the control into the current row
                const out = { controlAdded: false };
                this.attemptAddControl(rowList[rowList.length - 1], control, out);


                if (!out.controlAdded) {
                    // Control didn't fit, build new row and add the control to that one
                    rowList.push(this.newRow());
                    this.attemptAddControl(rowList[rowList.length - 1], control, out);
                }
            }
        });
        return rowList;
    }

    private newRow(columns?: IFormColumn[]): IFormRow {
        return {
            columns: columns || [] as IFormColumn[]
        } as IFormRow;
    }
    private newColumn(size: NgfSize, content: NgfControlType[]): IFormColumn {
        return {
            size,
            class: this.getFieldClass(size),
            content
        };
    }
    private attemptAddControl(row: IFormRow, control: NgfControlType, out: { controlAdded: boolean }): void {

        out.controlAdded = false;

        // check if you can add a new column with the control in it
        let columnWidth = 0;
        row.columns.forEach(col => {
            columnWidth += col.size;
        });

        // If enough space to the right, build new column
        if ((12 - columnWidth) >= control.size) {

            row.columns.push(this.newColumn(control.size, [control]));
            out.controlAdded = true;
            return;
        } else {
            // if not, check if any multi rows exist
            const rowHeight = this.getRowHeight(row);

            // can't fit in new column and no space available on this row, exit
            if (rowHeight === 1) {
                out.controlAdded = false;
                return;
            }

            row.columns.forEach(col => {
                if (!out.controlAdded) {
                    const currentColumnHeight = this.getColumnHeight(col);
                    const available = rowHeight - currentColumnHeight;

                    // if there's space, push the control in and record that it happened
                    if (control.rows <= available && col.size === control.size) {
                        col.content.push(control);
                        out.controlAdded = true;
                    }
                }

            });
        }
        return;
    }

    private hasRowsProperty(c: any): boolean {
        try {
            checkObject(c, 'rows', '');
            return true;
        } catch (e) {
            return false;
        }
    }
    public getRowHeight(row: IFormRow): number {
        let rowHeight = 1;
        row.columns.forEach(col => {
            const colHeight = this.getColumnHeight(col);
            if (colHeight > rowHeight) {
                rowHeight = colHeight;
            }
        });
        return rowHeight;
    }
    public getColumnHeight(column: IFormColumn): number {
        let colHeight = 0;
        column.content.forEach(item => {
            if (this.hasRowsProperty(item)) {
                colHeight += (item as any).rows;
            } else {
                colHeight += 1;
            }
        });
        return colHeight;
    }

    private getFieldClass(size: NgfSize): string {
        switch (size) {
            case 3:
                return 'col-12 col-md-3';
            case 6:
                return 'col-12 col-md-6';
            case 9:
                return 'col-12 col-md-9';
            default:
                return 'col-12';
        }
    }
}
