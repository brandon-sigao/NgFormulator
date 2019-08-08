import { NgfFormBuilderService, NgfFormGroup } from 'ng-formulator';
import { Component } from '@angular/core';
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
    console.log(this.form);
  }
}
