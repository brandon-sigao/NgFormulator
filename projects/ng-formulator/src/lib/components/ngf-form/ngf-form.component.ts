import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { NgfFormGroup } from '../../classes';
import { NgfControlType } from '../../types';

@Component({
  selector: 'ngf-form',
  templateUrl: './ngf-form.component.html',
  styleUrls: ['./ngf-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgfFormComponent implements OnInit {

  @Input() form: NgfFormGroup;

  constructor() { }

  ngOnInit() {

  }

  get controls(): NgfControlType[] {
    return this.form.getControlsAsArray();
  }

  public getFieldClass(size: number): string {
    switch (size) {
      case 3:
        return 'col-12 col-sm-6 col-md-3';
      case 6:
        return 'col-12 col-sm-8 col-md-6';
      case 9:
        return 'col-12 col-sm-8 col-md-6';
      default:
        return 'col-12';
    }
  }
}
