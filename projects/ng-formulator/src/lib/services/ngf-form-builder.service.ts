import { NgfGroupConfig } from '../interfaces/group-config/ngf-group-config';
import { NgfControlConfigType } from './../types/ngf-control-config-type';
import { Injectable } from '@angular/core';
import { NgfFormGroup } from '../classes';
import { NgfControlType } from '../types';
import { NgfValidator } from '../classes/ngf-validator';
import { checkObject } from '../util/check-object.util';
import { Guid } from 'guid-typescript';
import { NgfControlFactoryService } from './ngf-control-factory.service';
import { NgfValidatorFactoryService } from './ngf-validator-factory.service';
import { NgfLoggerService } from './ngf-logger.service';

@Injectable()
export class NgfFormBuilderService {

    constructor(
        private ngfControlFactoryService: NgfControlFactoryService,
        private ngfValidatorFactoryService: NgfValidatorFactoryService,
        private ngfLoggerService: NgfLoggerService) { }

    public build(groupConfig: NgfGroupConfig): NgfFormGroup {

        // Create ID if none provided
        groupConfig.id = groupConfig.id || Guid.create().toString();

        // Validate that group has label and controls
        const valid = this.validateConfig(groupConfig);

        const group = new NgfFormGroup();

        if (valid) {
            group.id = groupConfig.id;
            group.label = groupConfig.label;
            group.description = groupConfig.description;
            this.generateControls(groupConfig.controls, group.id)
                .forEach(val => group.addControl(val.prop, val.control));
        }

        return group;
    }


    private validateConfig(config: NgfGroupConfig): boolean {
        if (!config.label || config.label.length === 0) {
            this.ngfLoggerService.warn(`Label for group is missing!`, config.label, config.id);
        }
        if (!config.controls || Object.keys(config.controls).length === 0) {
            this.ngfLoggerService.error(`No controls found for group cannot create group.`, config.label, config.id);
            return false;
        }
        return true;
    }

    private generateControls(
        controls: { [key: string]: NgfControlConfigType },
        groupId: string): { prop: string, control: NgfControlType }[] {
        return Object.keys(controls)
            .map((prop: string) => {
                const controlConfig: NgfControlConfigType = controls[prop];
                const control = this.parseControl(controlConfig, groupId);
                return { prop, control };
            })
            .filter(val => val.control !== null);
    }

    private parseControl(config: NgfControlConfigType, groupId: string): NgfControlType {
        const validators: NgfValidator[] = this.ngfValidatorFactoryService.build(config.validators || {});
        try {
            checkObject(config, 'type', 'Control object does not have a type!');
            if (config.type === 'group') {
                checkObject(config, 'controls', 'No controls found on group config object!');

                return this.build(config);
            } else {
                return this.ngfControlFactoryService.build(config, validators);
            }
        } catch (e) {
            this.ngfLoggerService.error('Could not generate control object!', config.label, groupId);
            return null;
        }
    }
}
