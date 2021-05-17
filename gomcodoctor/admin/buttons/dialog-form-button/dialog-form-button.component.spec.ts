import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFormButtonComponent } from './dialog-form-button.component';

describe('DialogFormButtonComponent', () => {
  let component: DialogFormButtonComponent;
  let fixture: ComponentFixture<DialogFormButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogFormButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFormButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
