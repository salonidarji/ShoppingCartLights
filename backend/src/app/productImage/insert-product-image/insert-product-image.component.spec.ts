import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertProductImageComponent } from './insert-product-image.component';

describe('InsertProductImageComponent', () => {
  let component: InsertProductImageComponent;
  let fixture: ComponentFixture<InsertProductImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertProductImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertProductImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
