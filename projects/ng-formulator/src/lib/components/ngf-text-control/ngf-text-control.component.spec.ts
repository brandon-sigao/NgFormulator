import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgfTextControlComponent } from './ngf-text-control.component';

describe('NgfTextControlComponent', () => {
  let component: NgfTextControlComponent;
  let fixture: ComponentFixture<NgfTextControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgfTextControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgfTextControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
