import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertProductFeatureComponent } from './insert-product-feature.component';

describe('InsertProductFeatureComponent', () => {
  let component: InsertProductFeatureComponent;
  let fixture: ComponentFixture<InsertProductFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertProductFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertProductFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
