import { Component, OnInit, Input, HostBinding, Inject } from '@angular/core';
import { NgfNumberControl } from '../../classes/ngf-number-control';
import { NgfControlService } from '../../services/ngf-control.service';
import { NgfConfig } from '../../interfaces';

@Component({
  selector: 'ngf-number-control',
  templateUrl: './ngf-number-control.component.html',
  styleUrls: ['./ngf-number-control.component.scss'],
  providers: [NgfControlService]
})
export class NgfNumberControlComponent implements OnInit {

  @Input() private set control(val: NgfNumberControl) {
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
