import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableDemo7Component } from './demo7.component';

describe('DataTableDemo7Component', () => {
  let component: DataTableDemo7Component;
  let fixture: ComponentFixture<DataTableDemo7Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableDemo7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableDemo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
