import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertAdminComponent } from './insert-admin.component';

describe('InsertAdminComponent', () => {
  let component: InsertAdminComponent;
  let fixture: ComponentFixture<InsertAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
