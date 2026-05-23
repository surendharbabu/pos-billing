import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomermanagementSummary } from './customermanagement-summary';

describe('CustomermanagementSummary', () => {
  let component: CustomermanagementSummary;
  let fixture: ComponentFixture<CustomermanagementSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomermanagementSummary],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomermanagementSummary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
