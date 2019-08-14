import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { NgfFormGroup } from '../../classes';
import { NgfControlType } from '../../types';
import { NgfGroupService } from '../../services/ngf-group.service';
import { IFormRow } from '../../interfaces';

@Component({
  selector: 'ngf-form',
  templateUrl: './ngf-form.component.html',
  styleUrls: ['./ngf-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    NgfGroupService
  ]
})
export class NgfFormComponent implements OnInit {

  @Input() form: NgfFormGroup;

  public rows: IFormRow[];

  constructor(private groupService: NgfGroupService) { }

  ngOnInit() {
    const controls = this.form.getControlsAsArray();
    this.rows = this.groupService.buildRowList(controls);
    console.log(this.rows);
  }
}
