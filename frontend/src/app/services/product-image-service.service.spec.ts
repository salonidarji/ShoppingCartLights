import { TestBed } from '@angular/core/testing';

import { ProductImageServiceService } from './product-image-service.service';

describe('ProductImageServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductImageServiceService = TestBed.get(ProductImageServiceService);
    expect(service).toBeTruthy();
  });
});
