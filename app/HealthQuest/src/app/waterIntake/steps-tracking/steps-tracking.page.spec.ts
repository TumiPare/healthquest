import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepsTrackingPage } from './steps-tracking.page';

describe('StepsTrackingPage', () => {
  let component: StepsTrackingPage;
  let fixture: ComponentFixture<StepsTrackingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StepsTrackingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
