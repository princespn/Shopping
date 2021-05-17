import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormPopupButtonComponent } from './edit-button.component';

describe('EditButtonComponent', () => {
  let component: EditFormPopupButtonComponent;
  let fixture: ComponentFixture<EditFormPopupButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFormPopupButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFormPopupButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
