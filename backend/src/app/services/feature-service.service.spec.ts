import { TestBed } from '@angular/core/testing';

import { FeatureServiceService } from './feature-service.service';

describe('FeatureServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeatureServiceService = TestBed.get(FeatureServiceService);
    expect(service).toBeTruthy();
  });
});
