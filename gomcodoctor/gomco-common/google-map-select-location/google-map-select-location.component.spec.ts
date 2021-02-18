import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMapSelectLocationComponent } from './google-map-select-location.component';

describe('GoogleMapSelectLocationComponent', () => {
  let component: GoogleMapSelectLocationComponent;
  let fixture: ComponentFixture<GoogleMapSelectLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleMapSelectLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleMapSelectLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
