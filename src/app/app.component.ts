import { NgfFormBuilderService } from './../../projects/ng-formulator/src/lib/services/ngf-form-builder.service';
import { Component } from '@angular/core';
import { NgfFormGroup } from 'projects/ng-formulator/src/lib/classes';
import { FORM_DEF } from 'src/const/form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public form: NgfFormGroup;
  constructor() {
    this.form = new NgfFormGroup(FORM_DEF);
    console.log(this.form);
  }
  title = 'FormulatorLibrary';
}
