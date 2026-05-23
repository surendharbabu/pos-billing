import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewProduct } from './addnew-product';

describe('AddnewProduct', () => {
  let component: AddnewProduct;
  let fixture: ComponentFixture<AddnewProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddnewProduct],
    }).compileComponents();

    fixture = TestBed.createComponent(AddnewProduct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
