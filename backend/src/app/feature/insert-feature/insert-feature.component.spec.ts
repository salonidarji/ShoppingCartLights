import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertFeatureComponent } from './insert-feature.component';

describe('InsertFeatureComponent', () => {
  let component: InsertFeatureComponent;
  let fixture: ComponentFixture<InsertFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
