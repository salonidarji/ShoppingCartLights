import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertUserAddressComponent } from './insert-user-address.component';

describe('InsertUserAddressComponent', () => {
  let component: InsertUserAddressComponent;
  let fixture: ComponentFixture<InsertUserAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertUserAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertUserAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
