import { NgFormulatorModule } from '../ng-formulator.module';
import { TestBed, inject } from '@angular/core/testing';
import { NgfBaseControl } from '../classes/ngf-base-control';
import { NgfFormBuilderService } from '../services/ngf-form-builder.service';
import { NgfFormGroup, NgfRadioControl } from '../classes';
import { NgfGroupConfig } from '../interfaces';
describe('RadioInput', () => {
    const optionSet = {
        1: 'Label 1',
        2: 'Label 2'
    };
    const mockGroup: NgfGroupConfig = {
        label: 'test_group',
        controls: {}
    };

    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            NgFormulatorModule
        ],
        providers: []
    }));

    it('should get label by value', () => {
        const control = new NgfRadioControl({
            initialValue: '',
            label: 'test label',
            type: 'radio',
            options: {
                1: 'Test Value 1'
            }
        });

        expect(control.getOptionLabel('1')).toEqual('Test Value 1');
        expect(control.getOptionLabel(1)).toEqual('Test Value 1');
        expect(control.getOptionLabel(2)).toEqual(null);
        expect(control.getOptionLabel('aasd')).toEqual(null);
    }
    );
    it('should get value by label', () => {
        const control = new NgfRadioControl({
            initialValue: '',
            label: 'test label',
            type: 'radio',
            options: {
                1: 'Test Value 1'
            }
        });

        expect(control.getOptionValue('Test Value 1')).toEqual('1');
        expect(control.getOptionValue('NOTHING')).toEqual(null);


    });
    it('should map options to strings no matter what', () => {
    });
    it('should output a label/value array', () => {
    });
});
