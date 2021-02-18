import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMapLocationInputComponent } from './google-map-location-input.component';

describe('GoogleMapLocationInputComponent', () => {
  let component: GoogleMapLocationInputComponent;
  let fixture: ComponentFixture<GoogleMapLocationInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleMapLocationInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleMapLocationInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
