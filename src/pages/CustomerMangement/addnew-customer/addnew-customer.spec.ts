import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewCustomer } from './addnew-customer';

describe('AddnewCustomer', () => {
  let component: AddnewCustomer;
  let fixture: ComponentFixture<AddnewCustomer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddnewCustomer],
    }).compileComponents();

    fixture = TestBed.createComponent(AddnewCustomer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
