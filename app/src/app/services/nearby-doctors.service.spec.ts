import { TestBed } from '@angular/core/testing';

import { NearbyDoctorsService } from './nearby-doctors.service';

describe('NearbyDoctorsService', () => {
  let service: NearbyDoctorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NearbyDoctorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
