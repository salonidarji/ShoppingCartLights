import { TestBed } from '@angular/core/testing';

import { ProductFeatureServiceService } from './product-feature-service.service';

describe('ProductFeatureServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductFeatureServiceService = TestBed.get(ProductFeatureServiceService);
    expect(service).toBeTruthy();
  });
});
