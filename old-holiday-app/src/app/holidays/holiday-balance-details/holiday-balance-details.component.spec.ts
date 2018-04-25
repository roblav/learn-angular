import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayBalanceDetailsComponent } from './holiday-balance-details.component';

describe('HolidayBalanceDetailsComponent', () => {
  let component: HolidayBalanceDetailsComponent;
  let fixture: ComponentFixture<HolidayBalanceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidayBalanceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayBalanceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
