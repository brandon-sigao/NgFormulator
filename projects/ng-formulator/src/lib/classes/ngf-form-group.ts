import { FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';

export class NgfFormGroup extends FormGroup {
    public label: string;
    public id: string;

    constructor(
        controls: { [key: string]: AbstractControl },
        validatorOrOpts?: ValidatorFn[]) {
        super(controls, validatorOrOpts);
    }
}
