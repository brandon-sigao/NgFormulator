import { NgfFormBuilderService } from './services/ngf-form-builder.service';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule
  ],
  providers: [
    NgfFormBuilderService
  ],
  exports: []
})
export class NgFormulatorModule { }
