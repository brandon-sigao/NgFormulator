import { Component, OnInit, Input } from '@angular/core';
import { NgfFormGroup } from '../../classes';
import { NgfControlType } from '../../types';

@Component({
  selector: 'ngf-form',
  templateUrl: './ngf-form.component.html',
  styleUrls: ['./ngf-form.component.css']
})
export class NgfFormComponent implements OnInit {

  @Input() form: NgfFormGroup;

  constructor() { }

  ngOnInit() {

  }

  get controls(): NgfControlType[] {
    return this.form.getAllControls();
  }

}
