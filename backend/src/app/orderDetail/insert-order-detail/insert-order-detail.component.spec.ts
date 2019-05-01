import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertOrderDetailComponent } from './insert-order-detail.component';

describe('InsertOrderDetailComponent', () => {
  let component: InsertOrderDetailComponent;
  let fixture: ComponentFixture<InsertOrderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertOrderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
