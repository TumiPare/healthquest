import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WaterIntakePage } from './water-intake.page';

describe('WaterIntakePage', () => {
  let component: WaterIntakePage;
  let fixture: ComponentFixture<WaterIntakePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WaterIntakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
