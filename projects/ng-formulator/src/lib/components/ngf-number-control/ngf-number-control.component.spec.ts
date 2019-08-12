import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgfNumberControlComponent } from './ngf-number-control.component';

describe('NgfNumberControlComponent', () => {
  let component: NgfNumberControlComponent;
  let fixture: ComponentFixture<NgfNumberControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgfNumberControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgfNumberControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
