import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserAddressComponent } from './update-user-address.component';

describe('UpdateUserAddressComponent', () => {
  let component: UpdateUserAddressComponent;
  let fixture: ComponentFixture<UpdateUserAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUserAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
