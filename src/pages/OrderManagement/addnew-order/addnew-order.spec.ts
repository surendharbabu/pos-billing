import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewOrder } from './addnew-order';

describe('AddnewOrder', () => {
  let component: AddnewOrder;
  let fixture: ComponentFixture<AddnewOrder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddnewOrder],
    }).compileComponents();

    fixture = TestBed.createComponent(AddnewOrder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
