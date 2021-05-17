import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportedCouriersComponent } from './supported-couriers.component';

describe('SupportedCouriersComponent', () => {
  let component: SupportedCouriersComponent;
  let fixture: ComponentFixture<SupportedCouriersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportedCouriersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportedCouriersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
