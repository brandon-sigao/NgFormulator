import { NgfFormBuilderService } from './services/ngf-form-builder.service';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgfFormComponent } from './components/ngf-form/ngf-form.component';
@NgModule({
  declarations: [NgfFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    NgfFormBuilderService
  ],
  exports: [NgfFormComponent]
})
export class NgFormulatorModule { }
