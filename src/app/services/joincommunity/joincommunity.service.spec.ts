import { TestBed, inject } from '@angular/core/testing';

import { JoincommunityService } from './joincommunity.service';

describe('JoincommunityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JoincommunityService]
    });
  });

  it('should be created', inject([JoincommunityService], (service: JoincommunityService) => {
    expect(service).toBeTruthy();
  }));
});
