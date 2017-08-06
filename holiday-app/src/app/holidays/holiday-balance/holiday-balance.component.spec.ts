import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayBalanceComponent } from './holiday-balance.component';

describe('HolidayBalanceComponent', () => {
  let component: HolidayBalanceComponent;
  let fixture: ComponentFixture<HolidayBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidayBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
