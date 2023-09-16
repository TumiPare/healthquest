import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FoodIntakePage } from './food-intake.page';

describe('FoodIntakePage', () => {
  let component: FoodIntakePage;
  let fixture: ComponentFixture<FoodIntakePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FoodIntakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
