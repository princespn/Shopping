import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuySmartParcelBoxComponent } from './buy-smart-parcel-box.component';

describe('BuySmartParcelBoxComponent', () => {
  let component: BuySmartParcelBoxComponent;
  let fixture: ComponentFixture<BuySmartParcelBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuySmartParcelBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuySmartParcelBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
