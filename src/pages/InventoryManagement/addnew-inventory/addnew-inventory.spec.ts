import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewInventory } from './addnew-inventory';

describe('AddnewInventory', () => {
  let component: AddnewInventory;
  let fixture: ComponentFixture<AddnewInventory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddnewInventory],
    }).compileComponents();

    fixture = TestBed.createComponent(AddnewInventory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
