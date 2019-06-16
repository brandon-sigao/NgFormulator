import { TestBed } from '@angular/core/testing';

import { NgFormulatorService } from './ng-formulator.service';

describe('NgFormulatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgFormulatorService = TestBed.get(NgFormulatorService);
    expect(service).toBeTruthy();
  });
});
