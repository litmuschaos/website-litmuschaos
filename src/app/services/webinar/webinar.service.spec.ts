import { TestBed, inject } from '@angular/core/testing';

import { WebinarService } from './webinar.service';

describe('WebinarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebinarService]
    });
  });

  it('should be created', inject([WebinarService], (service: WebinarService) => {
    expect(service).toBeTruthy();
  }));
});
