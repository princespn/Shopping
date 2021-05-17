import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedRetailersComponent } from './linked-retailers.component';

describe('LinkedRetailersComponent', () => {
  let component: LinkedRetailersComponent;
  let fixture: ComponentFixture<LinkedRetailersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkedRetailersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedRetailersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
