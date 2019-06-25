import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFaqComponent } from './view-faq.component';

describe('ViewFaqComponent', () => {
  let component: ViewFaqComponent;
  let fixture: ComponentFixture<ViewFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
