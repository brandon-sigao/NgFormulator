import { NgfFormBuilderService } from './services/ngf-form-builder.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgfFormComponent } from './components/ngf-form/ngf-form.component';
import { NgfControlFactoryService } from './services/ngf-control-factory.service';
import { NgfValidatorFactoryService } from './services/ngf-validator-factory.service';
import { NgfLoggerService } from './services/ngf-logger.service';
import { NgfTextControlComponent } from './components/ngf-text-control/ngf-text-control.component';
import { NgfConfig } from './interfaces/base-config/ngf-config';
import { NgfControlLabelComponent } from './components/ngf-control-label/ngf-control-label.component';
import { NgfValidationErrorComponent } from './components/ngf-validation-error/ngf-validation-error.component';
import { NgfTextareaControlComponent } from './components/ngf-textarea-control/ngf-textarea-control.component';
import { NgfControlService } from './services/ngf-control.service';
import { NgfNumberControlComponent } from './components/ngf-number-control/ngf-number-control.component';

@NgModule({
  declarations: [
    NgfFormComponent,
    NgfTextControlComponent,
    NgfControlLabelComponent,
    NgfValidationErrorComponent,
    NgfTextareaControlComponent,
    NgfNumberControlComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    NgfFormBuilderService,
    NgfControlFactoryService,
    NgfValidatorFactoryService,
    NgfLoggerService,
    NgfControlService
  ],
  exports: [NgfFormComponent]
})
export class NgFormulatorModule {
  static forRoot(config?: NgfConfig): ModuleWithProviders {
    return {
      ngModule: NgFormulatorModule,
      providers: [
        NgfFormBuilderService,
        { provide: 'config', useValue: config }
      ]
    };
  }
}
