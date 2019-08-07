import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgfFormComponent } from './ngf-form.component';

describe('NgfFormComponent', () => {
  let component: NgfFormComponent;
  let fixture: ComponentFixture<NgfFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgfFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgfFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
