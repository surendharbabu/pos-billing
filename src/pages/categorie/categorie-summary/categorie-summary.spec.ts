import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieSummary } from './categorie-summary';

describe('CategorieSummary', () => {
  let component: CategorieSummary;
  let fixture: ComponentFixture<CategorieSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorieSummary],
    }).compileComponents();

    fixture = TestBed.createComponent(CategorieSummary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
