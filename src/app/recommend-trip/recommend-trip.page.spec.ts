import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendTripPage } from './recommend-trip.page';

describe('RecommendTripPage', () => {
  let component: RecommendTripPage;
  let fixture: ComponentFixture<RecommendTripPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendTripPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendTripPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
