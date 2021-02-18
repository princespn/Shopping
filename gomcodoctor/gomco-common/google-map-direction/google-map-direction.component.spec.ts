import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMapDirectionComponent } from './google-map-direction.component';

describe('GoogleMapDirectionComponent', () => {
  let component: GoogleMapDirectionComponent;
  let fixture: ComponentFixture<GoogleMapDirectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleMapDirectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleMapDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
