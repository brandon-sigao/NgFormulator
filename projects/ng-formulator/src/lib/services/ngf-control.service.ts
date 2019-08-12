import { NgfConfig } from './../interfaces/base-config/ngf-config';
import { Injectable } from '@angular/core';
import { NgfBaseControl } from '../classes';


@Injectable()
export class NgfControlService {

    private _control: NgfBaseControl;
    private _config: NgfConfig;

    public isActive: boolean;

    constructor() { }

    public setup(control: NgfBaseControl, config: NgfConfig) {
        this._control = control;
        this._config = config;
    }

    public onFocus() {
        this.isActive = true;
    }
    public onBlur() {
        this.isActive = false;
    }
    get control(): NgfBaseControl {
        return this._control;
    }

    get label(): string {
        return this._control.label;
    }

    get id(): string {
        return (this._control) ? this._control.id : '';
    }

    get required(): boolean {
        return this._control.hasValidator('required');
    }

    get fieldColor() {
        return (this.isActive) ? this._config.activeColor : this._config.inactiveColor;
    }

    get borderBottomStyle() {
        return `1px solid ${this.fieldColor}`;
    }

    get placeholder(): string {
        let value = '';
        value = this._control.label;
        value += (this.required) ? '*' : '';
        return value;
    }

}
