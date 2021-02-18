import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMapLocationComponent } from './google-map-location-input.component';

describe('GoogleMapLocationInputComponent', () => {
  let component: GoogleMapLocationComponent;
  let fixture: ComponentFixture<GoogleMapLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleMapLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleMapLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
