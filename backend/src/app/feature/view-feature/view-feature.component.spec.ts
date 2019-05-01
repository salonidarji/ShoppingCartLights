import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFeatureComponent } from './view-feature.component';

describe('ViewFeatureComponent', () => {
  let component: ViewFeatureComponent;
  let fixture: ComponentFixture<ViewFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
