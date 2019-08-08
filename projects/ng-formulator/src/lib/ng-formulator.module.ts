import { NgfFormBuilderService } from './services/ngf-form-builder.service';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgfFormComponent } from './components/ngf-form/ngf-form.component';
import { NgfControlFactoryService } from './services/ngf-control-factory.service';
import { NgfValidatorFactoryService } from './services/ngf-validator-factory.service';
import { NgfLoggerService } from './services/ngf-logger.service';
@NgModule({
  declarations: [NgfFormComponent],
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
export class NgFormulatorModule { }
