// import { NgFormulatorModule } from '../../projects/ng-formulator/src/lib/ng-formulator.module';
// import { TestBed } from '@angular/core/testing';
// import { inject } from '@angular/core/testing';
// import { NgfFormBuilderService } from '../../projects/ng-formulator/src/lib/services/ngf-form-builder.service';
// import { NgfTextControl, NgfTextAreaControl, NgfRadioControl, NgfMultiSelectControl } from '../../projects/ng-formulator/src/lib/classes';
// import { NgfTextAreaControlConfig } from 'projects/ng-formulator/src/lib/interfaces';

// describe('NgfFormBuilderService', () => {

//     beforeEach(() => TestBed.configureTestingModule({
//         imports: [
//             NgFormulatorModule
//         ],
//         providers: []
//     }));

//     it('should be created',
//         inject([NgfFormBuilderService], (service: NgfFormBuilderService) => {
//             expect(service).toBeDefined();
//         }));

//     it('should create an NgfFormGroup',
//         inject([NgfFormBuilderService], (service: NgfFormBuilderService) => {

//             const group = service.build({
//                 label: 'test',
//                 type: 'group',
//                 controls: {
//                     testControl: {
//                         label: 'test control',
//                         type: 'text',
//                         initialValue: 'TEST_VALUE'
//                     }
//                 }
//             });
//             expect(group.get('testControl').value).toEqual('TEST_VALUE');
//         }));
//     it('should create recursive levels of groups',
//         inject([NgfFormBuilderService], (service: NgfFormBuilderService) => {

//             const group = service.build({
//                 label: 'test',
//                 type: 'group',
//                 controls: {
//                     testControl: {
//                         label: 'test control',
//                         type: 'text',
//                         initialValue: 'TEST_VALUE'
//                     },
//                     testGroup: {
//                         label: 'Test group',
//                         type: 'group',
//                         controls: {
//                             testControl2: {
//                                 label: 'test control',
//                                 type: 'text',
//                                 initialValue: 'TEST_VALUE2'
//                             }
//                         }
//                     }
//                 }
//             });
//             expect(group.valid).toEqual(true);
//             expect(group.get('testControl').value).toEqual('TEST_VALUE');
//             expect(group.get('testGroup').get('testControl2').value).toEqual('TEST_VALUE2');
//         }));
//     it('should create text field',
//         inject([NgfFormBuilderService], (service: NgfFormBuilderService) => {

//             const group = service.build({
//                 label: 'test',
//                 type: 'group',
//                 controls: {
//                     testControl: {
//                         label: 'test control',
//                         type: 'text',
//                     }
//                 }
//             });
//             const control = group.get('testControl');
//             expect(control instanceof NgfTextControl).toEqual(true);
//         }));
//     it('should create area field',
//         inject([NgfFormBuilderService], (service: NgfFormBuilderService) => {

//             const group = service.build({
//                 label: 'test',
//                 type: 'group',
//                 controls: {
//                     testControl: {
//                         label: 'test control',
//                         type: 'textarea',
//                     } as NgfTextAreaControlConfig
//                 }
//             });
//             const control = group.get('testControl');
//             expect(control instanceof NgfTextAreaControl).toEqual(true);
//         }));
//     it('should create radio field',
//         inject([NgfFormBuilderService], (service: NgfFormBuilderService) => {

//             const group = service.build({
//                 label: 'test',
//                 type: 'group',
//                 controls: {
//                     testControl: {
//                         label: 'test control',
//                         type: 'radio',
//                         options: {
//                             1: 'test'
//                         }
//                     }
//                 }
//             });
//             const control = group.get('testControl');
//             expect(control instanceof NgfRadioControl).toEqual(true);
//         }));
//     it('should create a multi-select field',
//         inject([NgfFormBuilderService], (service: NgfFormBuilderService) => {

//             const group = service.build({
//                 label: 'test',
//                 type: 'group',
//                 controls: {
//                     testControl: {
//                         label: 'test control',
//                         type: 'multi',
//                         options: [
//                             {
//                                 label: 'test 1',
//                                 type: 'boolean',
//                             },
//                             {
//                                 label: 'test 2',
//                                 type: 'boolean',
//                             }
//                         ]
//                     }
//                 }
//             });
//             const control = group.get('testControl');
//             expect(control instanceof NgfMultiSelectControl).toEqual(true);
//         }));
// });
