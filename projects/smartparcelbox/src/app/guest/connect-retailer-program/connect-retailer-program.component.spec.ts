import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectRetailerProgramComponent } from './connect-retailer-program.component';

describe('ConnectRetailerProgramComponent', () => {
  let component: ConnectRetailerProgramComponent;
  let fixture: ComponentFixture<ConnectRetailerProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectRetailerProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectRetailerProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
