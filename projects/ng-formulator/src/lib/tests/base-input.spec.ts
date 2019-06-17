import { NgFormulatorModule } from './../ng-formulator.module';
import { TestBed, inject } from '@angular/core/testing';
import { NgfBaseControl } from '../classes/ngf-base-control';
import { NgfFormBuilderService } from '../services/ngf-form-builder.service';
import { NgfFormGroup } from '../classes';
import { NgfGroupConfig } from '../interfaces';
describe('BaseInput', () => {

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

    it('should create without validators',
        inject([NgfFormBuilderService], (service: NgfFormBuilderService) => {

            // tslint:disable-next-line:no-string-literal
            mockGroup.controls['test_control'] = {
                label: 'test',
                size: 6,
                type: 'text'
            };
            const group = service.group(mockGroup);
            const control = group.get('test_control');
            expect(control.valid).toBeTruthy();
        }));
    it('should create with validators',
        inject([NgfFormBuilderService], (service: NgfFormBuilderService) => {
            // tslint:disable-next-line:no-string-literal
            mockGroup.controls['test_control'] = {
                label: 'test',
                size: 6,
                type: 'text',
                initialValue: null,
                validators: {
                    required: {}
                }
            };
            const group = service.group(mockGroup);
            const control = group.get('test_control');
            expect(control.valid).toBeFalsy();
            expect(control.errors).toBeDefined();
        }));

    it('should create a text list of validators',
        inject([NgfFormBuilderService], (service: NgfFormBuilderService) => {
            // tslint:disable-next-line:no-string-literal
            mockGroup.controls['test_control'] = {
                label: 'test',
                size: 6,
                type: 'text',
                initialValue: null,
                validators: {
                    required: {},
                    max: {
                        amount: 3
                    }
                }
            };
            const group = service.group(mockGroup);
            const control = group.get('test_control') as NgfBaseControl;
            expect(control.hasValidator('required')).toBeTruthy();
            expect(control.hasValidator('max')).toBeTruthy();
        }));
});
