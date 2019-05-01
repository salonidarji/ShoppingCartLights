import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductFeatureComponent } from './view-product-feature.component';

describe('ViewProductFeatureComponent', () => {
  let component: ViewProductFeatureComponent;
  let fixture: ComponentFixture<ViewProductFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProductFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
