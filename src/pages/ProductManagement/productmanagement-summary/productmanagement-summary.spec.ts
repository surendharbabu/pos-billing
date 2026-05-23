import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductmanagementSummary } from './productmanagement-summary';

describe('ProductmanagementSummary', () => {
  let component: ProductmanagementSummary;
  let fixture: ComponentFixture<ProductmanagementSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductmanagementSummary],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductmanagementSummary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
