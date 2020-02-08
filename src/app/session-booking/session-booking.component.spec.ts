import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionBookingComponent } from './session-booking.component';

describe('SessionBookingComponent', () => {
  let component: SessionBookingComponent;
  let fixture: ComponentFixture<SessionBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
