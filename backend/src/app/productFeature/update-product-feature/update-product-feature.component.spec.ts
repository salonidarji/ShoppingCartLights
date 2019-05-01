import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProductFeatureComponent } from './update-product-feature.component';

describe('UpdateProductFeatureComponent', () => {
  let component: UpdateProductFeatureComponent;
  let fixture: ComponentFixture<UpdateProductFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProductFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProductFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
