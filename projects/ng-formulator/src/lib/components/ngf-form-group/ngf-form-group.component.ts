import { IFormRow } from './../../interfaces';
import { NgfGroupService } from './../../services';
import { Component, OnInit, Input } from '@angular/core';
import { NgfFormGroup } from '../../classes';

@Component({
  selector: 'ngf-form-group',
  templateUrl: './ngf-form-group.component.html',
  styleUrls: ['./ngf-form-group.component.scss'],
  providers: [NgfGroupService]
})
export class NgfFormGroupComponent implements OnInit {

  @Input() control: NgfFormGroup;
  public rows: IFormRow[];

  constructor(public groupService: NgfGroupService) { }

  ngOnInit() {
    this.rows = this.groupService.buildRowList(this.control.getControlsAsArray());
  }

}
