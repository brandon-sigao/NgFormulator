// import { FormControl } from '@angular/forms';
// import { NgFormulatorModule } from '../../projects/ng-formulator/src/lib/ng-formulator.module';
// import { TestBed } from '@angular/core/testing';
// import { NgfRadioControl, NgfMultiSelectControl } from '../../projects/ng-formulator/src/lib/classes';
// import { NgfGroupConfig } from '../../projects/ng-formulator/src/lib/interfaces';

// describe('MultiSelectInput', () => {
//     const optionSet = {
//         1: 'Label 1',
//         2: 'Label 2'
//     };
//     const mockGroup: NgfGroupConfig = {
//         label: 'test_group',
//         controls: {}
//     };

//     beforeEach(() => TestBed.configureTestingModule({
//         imports: [
//             NgFormulatorModule
//         ],
//         providers: []
//     }));

//     it('should get label by value', () => {

//     });
//     it('should get value by label', () => {



//     });
//     it('should get a list of controls', () => {
//         const control = new NgfMultiSelectControl({
//             initialValue: [],
//             label: 'test label',
//             type: 'multi',
//             options: optionSet,
//         });
//         expect(control.getControlList().length).toEqual(2);
//         expect(control.getControlList()[0] instanceof FormControl).toEqual(true);
//     });
//     it('should be invalid if validators failed', () => {
//         const control = new NgfMultiSelectControl({
//             initialValue: null,
//             label: 'test label',
//             type: 'multi',
//             options: optionSet,
//             validators: {
//                 required: {}
//             }
//         });

//         expect(control.valid).toEqual(false);
//         expect(control.errors).toBeDefined();
//     });
//     it('should be valid if value is set', () => {
//         const control = new NgfMultiSelectControl({
//             initialValue: null,
//             label: 'test label',
//             type: 'multi',
//             options: optionSet,
//             validators: {
//                 required: {}
//             }
//         });
//         control.controls[0].setValue(true);
//         expect(control.valid).toEqual(true);
//         expect(control.errors).toBeNull();
//     });
// });
