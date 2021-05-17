import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSmartParcelBoxComponent } from './register-smart-parcel-box.component';

describe('RegisterSmartParcelBoxComponent', () => {
  let component: RegisterSmartParcelBoxComponent;
  let fixture: ComponentFixture<RegisterSmartParcelBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSmartParcelBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSmartParcelBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
