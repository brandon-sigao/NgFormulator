import { Component, OnInit, Input, HostBinding, Inject } from '@angular/core';
import { NgfTextControl } from '../../classes';
import { NgfConfig } from '../../interfaces/base-config/ngf-config';
import { NgfControlService } from '../../services/ngf-control.service';

@Component({
  selector: 'ngf-text-control',
  templateUrl: './ngf-text-control.component.html',
  styleUrls: ['./ngf-text-control.component.scss'],
  providers: [NgfControlService]
})
export class NgfTextControlComponent implements OnInit {

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

  ngOnInit() { }

  get fieldHasValue() {
    return (this.service.control.value !== null) && (this.service.control.value !== '');
  }

}
