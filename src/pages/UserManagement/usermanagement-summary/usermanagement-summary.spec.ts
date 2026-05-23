import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermanagementSummary } from './usermanagement-summary';

describe('UsermanagementSummary', () => {
  let component: UsermanagementSummary;
  let fixture: ComponentFixture<UsermanagementSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsermanagementSummary],
    }).compileComponents();

    fixture = TestBed.createComponent(UsermanagementSummary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
