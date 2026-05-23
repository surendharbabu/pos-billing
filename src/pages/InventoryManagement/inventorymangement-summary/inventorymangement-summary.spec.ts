import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorymangementSummary } from './inventorymangement-summary';

describe('InventorymangementSummary', () => {
  let component: InventorymangementSummary;
  let fixture: ComponentFixture<InventorymangementSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventorymangementSummary],
    }).compileComponents();

    fixture = TestBed.createComponent(InventorymangementSummary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
