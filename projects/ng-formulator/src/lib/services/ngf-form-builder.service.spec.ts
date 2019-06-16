import { NgFormulatorModule } from './../ng-formulator.module';
import { TestBed } from '@angular/core/testing';
import { inject } from '@angular/core/testing';
import { NgfFormBuilderService } from './ngf-form-builder.service';

describe('NgfFormBuilderService', () => {

    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            NgFormulatorModule
        ],
        providers: []
    }));

    it('should be created',
        inject([NgfFormBuilderService], (service: NgfFormBuilderService) => {
            expect(service).toBeDefined();
        }));

    it('should create an NgfFormGroup',
        inject([NgfFormBuilderService], (service: NgfFormBuilderService) => {

            const group = service.group({
                label: 'test',
                controls: {
                    testControl: {
                        label: 'test control',
                        type: 'text',
                        initialValue: 'TEST_VALUE'
                    }
                }
            });
            expect(group.get('testControl').value).toEqual('TEST_VALUE');
        }));
    it('should create recursive levels of groups',
        inject([NgfFormBuilderService], (service: NgfFormBuilderService) => {

            const group = service.group({
                label: 'test',
                controls: {
                    testControl: {
                        label: 'test control',
                        type: 'text',
                        initialValue: 'TEST_VALUE'
                    }
                },
                groups: {
                    testGroup: {
                        label: 'Test group',
                        controls: {
                            testControl2: {
                                label: 'test control',
                                type: 'text',
                                initialValue: 'TEST_VALUE2'
                            }
                        }
                    }
                }
            });
            expect(group.valid).toEqual(true);
            expect(group.get('testControl').value).toEqual('TEST_VALUE');
            expect(group.get('testGroup').get('testControl2').value).toEqual('TEST_VALUE2');
        }));
    it('should create validators while building an NgfFormGroup',
        inject([NgfFormBuilderService], (service: NgfFormBuilderService) => {

            const group = service.group({
                label: 'test',
                controls: {
                    testControl: {
                        label: 'test control',
                        type: 'text',
                        initialValue: null,
                        validators: {
                            required: {}
                        }
                    }
                }
            });

            expect(group.valid).toEqual(false);
            expect(group.get('testControl').errors).toBeDefined();
        }));
});
