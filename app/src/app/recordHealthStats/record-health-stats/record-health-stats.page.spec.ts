import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecordHealthStatsPage } from './record-health-stats.page';

describe('RecordHealthStatsPage', () => {
  let component: RecordHealthStatsPage;
  let fixture: ComponentFixture<RecordHealthStatsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecordHealthStatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
