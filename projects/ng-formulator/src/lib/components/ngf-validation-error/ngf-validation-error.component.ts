import { NgfConfig } from './../../interfaces/ngf-config';
import { Component, OnInit, HostBinding, Input, Inject } from '@angular/core';
import { NgfControlType } from './../../types/ngf-control-type';
import { NgfBaseControl } from '../../classes';

@Component({
  selector: 'ngf-validation-error',
  templateUrl: './ngf-validation-error.component.html',
  styleUrls: ['./ngf-validation-error.component.scss']
})
export class NgfValidationErrorComponent implements OnInit {
  @Input() control: NgfBaseControl;

  @HostBinding('style.padding-top') paddingTop = '2px';
  @HostBinding('style.height') height = '16px';
  @HostBinding('style.font-size') fontSize = '11px';
  @HostBinding('style.color') color;

  // TODO: once custom error messages are saving to controls, display them if they exist
  constructor(@Inject('config') public config: NgfConfig) {
    this.color = config.errorColor;
  }

  ngOnInit() { }

}
