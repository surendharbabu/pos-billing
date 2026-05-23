import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdermanagementSummary } from './ordermanagement-summary';

describe('OrdermanagementSummary', () => {
  let component: OrdermanagementSummary;
  let fixture: ComponentFixture<OrdermanagementSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdermanagementSummary],
    }).compileComponents();

    fixture = TestBed.createComponent(OrdermanagementSummary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
