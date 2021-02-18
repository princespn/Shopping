import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GenericDoseChipsComponent } from './generic-dose-chips.component';

describe('GenericDoseChipsComponent', () => {
  let component: GenericDoseChipsComponent;
  let fixture: ComponentFixture<GenericDoseChipsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericDoseChipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericDoseChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
