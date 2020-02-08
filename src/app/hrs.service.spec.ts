import { TestBed, inject } from '@angular/core/testing';

import { HrsService } from './hrs.service';

describe('HrsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HrsService]
    });
  });

  it('should be created', inject([HrsService], (service: HrsService) => {
    expect(service).toBeTruthy();
  }));
});
