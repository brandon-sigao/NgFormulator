import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgfControlLabelComponent } from './ngf-control-label.component';

describe('NgfControlLabelComponent', () => {
  let component: NgfControlLabelComponent;
  let fixture: ComponentFixture<NgfControlLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgfControlLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgfControlLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
