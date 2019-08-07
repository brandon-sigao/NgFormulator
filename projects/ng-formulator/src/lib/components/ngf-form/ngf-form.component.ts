import { Component, OnInit, Input } from '@angular/core';
import { NgfFormGroup } from '../../classes';

@Component({
  selector: 'ngf-form',
  templateUrl: './ngf-form.component.html',
  styleUrls: ['./ngf-form.component.css']
})
export class NgfFormComponent implements OnInit {

  @Input() form: NgfFormGroup;

  constructor() { }

  ngOnInit() {
    console.log(this.form.getControlsList());
    console.log(this.form.getGroupsList());
  }

}
