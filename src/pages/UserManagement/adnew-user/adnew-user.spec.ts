import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdnewUser } from './adnew-user';

describe('AdnewUser', () => {
  let component: AdnewUser;
  let fixture: ComponentFixture<AdnewUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdnewUser],
    }).compileComponents();

    fixture = TestBed.createComponent(AdnewUser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
