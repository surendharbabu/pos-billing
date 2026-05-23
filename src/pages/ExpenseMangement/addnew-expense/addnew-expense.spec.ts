import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewExpense } from './addnew-expense';

describe('AddnewExpense', () => {
  let component: AddnewExpense;
  let fixture: ComponentFixture<AddnewExpense>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddnewExpense],
    }).compileComponents();

    fixture = TestBed.createComponent(AddnewExpense);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
