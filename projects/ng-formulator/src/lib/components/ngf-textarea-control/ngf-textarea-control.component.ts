import { NgfTextControl } from './../../classes/ngf-text-control';
import { Component, OnInit, Inject, HostBinding, Input } from '@angular/core';
import { NgfControlService } from '../../services/ngf-control.service';
import { NgfConfig } from '../../interfaces';
import { NgfTextAreaControl } from '../../classes';

@Component({
  selector: 'ngf-textarea-control',
  templateUrl: './ngf-textarea-control.component.html',
  styleUrls: ['./ngf-textarea-control.component.scss'],
  providers: [NgfControlService]
})
export class NgfTextareaControlComponent implements OnInit {

  @Input() private set control(val: NgfTextControl) {
    this.service.setup(val, this.config);
  }

  @HostBinding('style.width') width = '100%';
  @HostBinding('style.display') display = 'flex';
  @HostBinding('style.flex-direction') flexDirection = 'column';
  @HostBinding('style.justify-content') justifyContent = 'flex-end';
  @HostBinding('style.padding-top') paddingTop = '0px';

  constructor(
    @Inject('config') public config: NgfConfig,
    public service: NgfControlService) {
  }

  ngOnInit() {
  }
  get fieldHasValue(): boolean {
    return (this.service.control.value !== null) && (this.service.control.value !== '');
  }
  get textAreaClass(): string {
    return `text-input input-sizer-${(this.service.control as NgfTextAreaControl).rows}`;
  }
}
