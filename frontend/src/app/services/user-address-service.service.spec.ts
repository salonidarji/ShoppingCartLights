import { TestBed } from '@angular/core/testing';

import { UserAddressServiceService } from './user-address-service.service';

describe('UserAddressServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserAddressServiceService = TestBed.get(UserAddressServiceService);
    expect(service).toBeTruthy();
  });
});
