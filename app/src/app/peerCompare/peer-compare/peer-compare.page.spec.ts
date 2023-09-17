import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeerComparePage } from './peer-compare.page';

describe('PeerComparePage', () => {
  let component: PeerComparePage;
  let fixture: ComponentFixture<PeerComparePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PeerComparePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
