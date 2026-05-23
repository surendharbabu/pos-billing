import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderThemes } from './header-themes';

describe('HeaderThemes', () => {
  let component: HeaderThemes;
  let fixture: ComponentFixture<HeaderThemes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderThemes],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderThemes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
