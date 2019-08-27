
import * as SERVICES from './services';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgfFormComponent } from './components/ngf-form/ngf-form.component';
import { NgfTextControlComponent } from './components/ngf-text-control/ngf-text-control.component';
import { NgfConfig } from './interfaces/base-config/ngf-config';
import { NgfControlLabelComponent } from './components/ngf-control-label/ngf-control-label.component';
import { NgfValidationErrorComponent } from './components/ngf-validation-error/ngf-validation-error.component';
import { NgfTextareaControlComponent } from './components/ngf-textarea-control/ngf-textarea-control.component';
import { NgfNumberControlComponent } from './components/ngf-number-control/ngf-number-control.component';
import { NgfFormGroupComponent } from './components/ngf-form-group/ngf-form-group.component';

@NgModule({
  declarations: [
    NgfFormComponent,
    NgfTextControlComponent,
    NgfControlLabelComponent,
    NgfValidationErrorComponent,
    NgfTextareaControlComponent,
    NgfNumberControlComponent,
    NgfFormGroupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    SERVICES.NgfFormBuilderService,
    SERVICES.NgfControlFactoryService,
    SERVICES.NgfValidatorFactoryService,
    SERVICES.NgfLoggerService,
    SERVICES.NgfControlService,
    SERVICES.NgfGroupService
  ],
  exports: [NgfFormComponent]
})
export class NgFormulatorModule {
  static forRoot(config?: NgfConfig): ModuleWithProviders {
    return {
      ngModule: NgFormulatorModule,
      providers: [
        SERVICES.NgfFormBuilderService,
        { provide: 'config', useValue: config }
      ]
    };
  }
}
