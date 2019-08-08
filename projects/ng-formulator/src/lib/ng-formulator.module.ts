import { NgfFormBuilderService } from './services/ngf-form-builder.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgfFormComponent } from './components/ngf-form/ngf-form.component';
import { NgfControlFactoryService } from './services/ngf-control-factory.service';
import { NgfValidatorFactoryService } from './services/ngf-validator-factory.service';
import { NgfLoggerService } from './services/ngf-logger.service';
import { NgfTextControlComponent } from './components/ngf-text-control/ngf-text-control.component';
import { NgfConfig } from './interfaces/ngf-config';

@NgModule({
  declarations: [NgfFormComponent, NgfTextControlComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    NgfFormBuilderService,
    NgfControlFactoryService,
    NgfValidatorFactoryService,
    NgfLoggerService
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
