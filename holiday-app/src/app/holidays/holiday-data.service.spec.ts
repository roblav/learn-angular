import { TestBed, inject } from '@angular/core/testing';

import { HolidayDataService } from './holiday-data.service';

describe('HolidayDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HolidayDataService]
    });
  });

  it('should be created', inject([HolidayDataService], (service: HolidayDataService) => {
    expect(service).toBeTruthy();
  }));
});
