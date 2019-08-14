import { FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NgfBooleanControl } from './ngf-boolean-control';
import { NgfControlTypeText, NgfValidatorTypeString, NgfSize } from '../types';
import { IValidated, IFormItem } from '../interfaces';

export class NgfMultiSelectControl extends FormArray implements IFormItem, IValidated {

    public id: string;
    public label: string;
    public size: NgfSize;
    public required: boolean;
    public type: NgfControlTypeText;
    public rows: number;

    public valuesSubscription: Subscription;
    public validatorStrings: NgfValidatorTypeString[];

    constructor(controls: NgfBooleanControl[], required: boolean) {
        super(controls);

        this.type = 'multi';
        this.required = required;

        // For now, just force the validator strings because there's only 1 type of validation
        // for this type of control
        this.validatorStrings = (this.required) ? ['required'] : [];

        this.setValidState();
        this.valueChanges.subscribe((values) => {
            this.setValidState();
        });
    }

    // TODO: test this.  May not work
    public get displayError(): boolean {
        return this.invalid && (this.dirty || this.touched);
    }
    public hasValidator(validatorString: NgfValidatorTypeString): boolean {
        return this.validatorStrings.indexOf(validatorString) > -1;
    }

    public getControlsAsArray(): NgfBooleanControl[] {
        return this.controls as NgfBooleanControl[];
    }
    public hasSelected(): boolean {
        return this.controls.some(control => control.value === true);
    }

    private setValidState(): void {
        if (this.required && !this.hasSelected()) {
            this.setInvalid();
        } else {
            this.setValid();
        }
    }
    private setInvalid(): void {
        this.setErrors({ required: true });
    }
    private setValid(): void {
        this.setErrors(undefined);
    }
}
