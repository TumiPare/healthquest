import { TestBed } from '@angular/core/testing';

import { CreaturesService } from './creatures.service';

describe('CreaturesService', () => {
  let service: CreaturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreaturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
