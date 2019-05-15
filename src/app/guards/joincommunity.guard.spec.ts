import { TestBed, async, inject } from '@angular/core/testing';

import { JoincommunityGuard } from './joincommunity.guard';

describe('JoincommunityGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JoincommunityGuard]
    });
  });

  it('should ...', inject([JoincommunityGuard], (guard: JoincommunityGuard) => {
    expect(guard).toBeTruthy();
  }));
});
