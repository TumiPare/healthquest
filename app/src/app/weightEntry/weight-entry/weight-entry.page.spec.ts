import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeightEntryPage } from './weight-entry.page';

describe('WeightEntryPage', () => {
  let component: WeightEntryPage;
  let fixture: ComponentFixture<WeightEntryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WeightEntryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
