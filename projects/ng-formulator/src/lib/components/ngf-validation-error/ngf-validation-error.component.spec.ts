import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgfValidationErrorComponent } from './ngf-validation-error.component';

describe('NgfValidationErrorComponent', () => {
  let component: NgfValidationErrorComponent;
  let fixture: ComponentFixture<NgfValidationErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgfValidationErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgfValidationErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
