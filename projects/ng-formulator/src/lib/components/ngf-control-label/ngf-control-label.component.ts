import { Component, OnInit, Inject, Input } from '@angular/core';
import { NgfConfig } from '../../interfaces/base-config/ngf-config';

@Component({
  selector: 'ngf-control-label',
  templateUrl: './ngf-control-label.component.html',
  styleUrls: ['./ngf-control-label.component.scss']
})
export class NgfControlLabelComponent implements OnInit {

  @Input() id: string;
  @Input() label: string;
  @Input() required: boolean;
  @Input() color: string;
  @Input() fieldHasValue: boolean;
  constructor(@Inject('config') public config: NgfConfig) { }

  ngOnInit() {
  }

}
