// import { NgFormulatorModule } from '../../projects/ng-formulator/src/lib/ng-formulator.module';
// import { TestBed } from '@angular/core/testing';
// import { NgfRadioControl } from '../../projects/ng-formulator/src/lib/classes';
// import { NgfGroupConfig } from '../../projects/ng-formulator/src/lib/interfaces';

// describe('RadioInput', () => {
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
//         const control = new NgfRadioControl({
//             initialValue: '',
//             label: 'test label',
//             type: 'radio',
//             options: {
//                 1: 'Test Value 1'
//             }
//         });

//         expect(control.getOptionLabel('1')).toEqual('Test Value 1');
//         expect(control.getOptionLabel(1)).toEqual('Test Value 1');
//         expect(control.getOptionLabel(2)).toEqual(null);
//         expect(control.getOptionLabel('aasd')).toEqual(null);
//     }
//     );
//     it('should get value by label', () => {
//         const control = new NgfRadioControl({
//             initialValue: '',
//             label: 'test label',
//             type: 'radio',
//             options: {
//                 1: 'Test Value 1'
//             }
//         });

//         expect(control.getOptionValue('Test Value 1')).toEqual('1');
//         expect(control.getOptionValue('NOTHING')).toEqual(null);


//     });
//     it('should map selected values to strings no matter what', () => {
//         const control = new NgfRadioControl({
//             initialValue: '',
//             label: 'test label',
//             type: 'radio',
//             options: {
//                 1: 'Test Value 1'
//             },
//         });
//         expect(control.options).toEqual({
//             // tslint:disable-next-line:object-literal-key-quotes
//             '1': 'Test Value 1'
//         });

//     });
//     it('should output a label/value array', () => {
//         const control = new NgfRadioControl({
//             initialValue: '',
//             label: 'test label',
//             type: 'radio',
//             options: {
//                 1: 'Test Label 1',
//                 2: 'Test Label 2'
//             },
//         });
//         expect(control.getOptionsAsList()).toEqual([
//             { value: '1', label: 'Test Label 1' },
//             { value: '2', label: 'Test Label 2' }
//         ]);
//     });
// });
