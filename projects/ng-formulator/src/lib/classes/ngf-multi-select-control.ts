import { FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NgfBooleanControl } from './ngf-boolean-control';
import { NgfControlTypeText } from '../types';

export class NgfMultiSelectControl extends FormArray {

    // https://stackoverflow.com/questions/40927167/angular-reactiveforms-producing-an-array-of-checkbox-values

    public valuesSubscription: Subscription;

    public label: string;
    public size: number;
    public required: boolean;
    public type: NgfControlTypeText;

    constructor(controls: NgfBooleanControl[], required: boolean) {
        super(controls);

        this.type = 'multi';
        this.required = required;

        this.setValidState();
        this.valueChanges.subscribe((values) => {
            this.setValidState();
        });
    }

    private setValidState(): void {
        if (this.required && !this.hasSelected()) {
            this.setInvalid();
        } else {
            this.setValid();
        }
    }

    public getControlsAsArray(): NgfBooleanControl[] {
        return this.controls as NgfBooleanControl[];
    }
    public hasSelected(): boolean {
        return this.controls.some(control => control.value === true);
    }

    private setInvalid(): void {
        this.setErrors({ required: true });
    }
    private setValid(): void {
        this.setErrors(undefined);
    }
}
