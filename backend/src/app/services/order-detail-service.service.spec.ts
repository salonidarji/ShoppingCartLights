import { TestBed } from '@angular/core/testing';

import { OrderDetailServiceService } from './order-detail-service.service';

describe('OrderDetailServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderDetailServiceService = TestBed.get(OrderDetailServiceService);
    expect(service).toBeTruthy();
  });
});
