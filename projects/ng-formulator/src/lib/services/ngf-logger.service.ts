import { Injectable } from '@angular/core';

@Injectable()
export class NgfLoggerService {

    private ngfHeader = '***** Ng Formulator *****';
    constructor() { }

    public warn(message: string, controlLabel?: string, groupId?: string, ): void {
        console.warn(this.ngfHeader);
        console.warn(message);

        if (controlLabel) {
            console.warn(`Target label: ${controlLabel}`);
        }
        if (groupId) {
            console.warn(`Target group id: ${groupId}`);

        }
    }
    public error(message: string, controlLabel?: string, groupId?: string, ): void {
        console.error(this.ngfHeader);
        console.error(message);

        if (controlLabel) {
            console.error(`Target label: ${controlLabel}`);
        }
        if (groupId) {
            console.error(`Target group id: ${groupId}`);
        }
    }
}
