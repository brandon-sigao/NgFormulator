import { Guid } from 'guid-typescript';
import { Component, OnInit, Input, HostBinding, Output, Inject, EventEmitter } from '@angular/core';
import { NgfTextControl } from '../../classes';
import { NgfConfig } from '../../interfaces/ngf-config';

@Component({
  selector: 'ngf-text-control',
  templateUrl: './ngf-text-control.component.html',
  styleUrls: ['./ngf-text-control.component.scss']
})
export class NgfTextControlComponent implements OnInit {

  @Input() control: NgfTextControl;

  public isActive: boolean;
  public id: string;

  @HostBinding('style.width') width = '100%';
  @HostBinding('style.display') display = 'flex';
  @HostBinding('style.flex-direction') flexDirection = 'column';
  @HostBinding('style.justify-content') justifyContent = 'flex-end';
  @HostBinding('style.padding-top') paddingTop = '0px';
  @HostBinding('style.margin-top') marginTop = '5px';

  @Output() focus = new EventEmitter();

  get required(): boolean {
    return this.control.hasValidator('required');
  }

  get fieldHasValue() {
    return (this.control) && (this.control.value !== null) && (this.control.value !== '');
  }
  constructor(@Inject('config') public config: NgfConfig) {
  }

  ngOnInit() {
    this.id = Guid.create().toString();

  }

  get _placeholder(): string {
    let value = '';
    value = this.control.label;
    value += (this.required) ? '*' : '';
    // Use label for placeholder if label exists and placeholder does not
    // value = (this.label && this.placeholder === '') ? this.label : this.placeholder;

    // if there's a placeholder, and field is required, add indicator
    // value = (this.required && value.length > 0) ? (value + ' *') : value;
    return value;
  }

  get fieldColor() {
    return (this.isActive) ? this.config.activeColor : this.config.inactiveColor;
  }

  get textBorderStyle() {
    return `1px solid ${this.fieldColor}`;
  }

  public onFocus() {
    this.focus.emit();
    this.isActive = true;
  }
  public onBlur() {
    this.isActive = false;
  }

}
