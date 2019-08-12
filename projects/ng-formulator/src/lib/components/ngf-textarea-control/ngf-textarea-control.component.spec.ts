import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgfTextareaControlComponent } from './ngf-textarea-control.component';

describe('NgfTextareaControlComponent', () => {
  let component: NgfTextareaControlComponent;
  let fixture: ComponentFixture<NgfTextareaControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgfTextareaControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgfTextareaControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
