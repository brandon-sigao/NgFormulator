import { FormControl } from '@angular/forms';
import { NgfMultiSelectControlConfig } from '../interfaces/control-interfaces/ngf-multi-select-control-config';
import { NgfBaseArrayControl } from './ngf-base-array-control';
import { Subscription, Observable, merge } from 'rxjs';

export class NgfMultiSelectControl extends NgfBaseArrayControl {

    // https://stackoverflow.com/questions/40927167/angular-reactiveforms-producing-an-array-of-checkbox-values
    public options: { [key: string]: string } | { [key: number]: string };
    public valuesObservable: Observable<any>;
    public valuesSubscription: Subscription;

    constructor(config: NgfMultiSelectControlConfig) {

        const controls = Object.keys(config.options).map(k => new FormControl(false));
        super(controls, config);
        this.valuesObservable = merge(this.controls.map(control => control.valueChanges));
        // TODO: probably need to move this into the base
        // TODO: values array will need IDs for proper selection of check boxes
        this.valuesSubscription = this.valuesObservable.subscribe((values) => {
            if (this.required && !this.hasSelected()) {
                this.setInvalid();
            } else {
                this.setValid();
            }
        });
        this.options = config.options;
    }


    private setInvalid(): void {
        this.setErrors({ required: true });
    }
    private setValid(): void {
        this.setErrors(undefined);
    }
}
