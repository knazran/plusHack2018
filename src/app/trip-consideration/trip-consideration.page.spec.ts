import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripConsiderationPage } from './trip-consideration.page';

describe('TripConsiderationPage', () => {
  let component: TripConsiderationPage;
  let fixture: ComponentFixture<TripConsiderationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripConsiderationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripConsiderationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
