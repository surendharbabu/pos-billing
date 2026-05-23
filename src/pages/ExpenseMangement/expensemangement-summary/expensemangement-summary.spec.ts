import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensemangementSummary } from './expensemangement-summary';

describe('ExpensemangementSummary', () => {
  let component: ExpensemangementSummary;
  let fixture: ComponentFixture<ExpensemangementSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpensemangementSummary],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpensemangementSummary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
