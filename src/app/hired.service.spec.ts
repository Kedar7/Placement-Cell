import { TestBed, inject } from '@angular/core/testing';

import { HiredService } from './hired.service';

describe('HiredService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HiredService]
    });
  });

  it('should be created', inject([HiredService], (service: HiredService) => {
    expect(service).toBeTruthy();
  }));
});
