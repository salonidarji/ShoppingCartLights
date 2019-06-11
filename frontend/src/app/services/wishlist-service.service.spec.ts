import { TestBed } from '@angular/core/testing';

import { WishlistServiceService } from './wishlist-service.service';

describe('WishlistServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WishlistServiceService = TestBed.get(WishlistServiceService);
    expect(service).toBeTruthy();
  });
});
