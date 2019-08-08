import { FormArray } from '@angular/forms';
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
  constructor(private ngfFormBuilderService: NgfFormBuilderService) {
    this.form = this.ngfFormBuilderService.build(FORM_DEF);
    console.log(this.form.get('testMulti').valid);

    (this.form.get('testMulti') as FormArray).controls[0].setValue(true);
    console.log(this.form.get('testMulti').valid);

  }
}
