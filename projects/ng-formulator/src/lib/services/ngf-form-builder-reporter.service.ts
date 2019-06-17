import { Injectable } from '@angular/core';

@Injectable()
export class NgfFormBuilderReporterService {

    constructor() { }

    public checkObject(object: any, shouldHaveField: string, errorMessage: string): void {

        const hasProperty: boolean = (object[shouldHaveField] !== undefined);
        if (!hasProperty) {
            throw new Error(errorMessage);
        }
    }
}
