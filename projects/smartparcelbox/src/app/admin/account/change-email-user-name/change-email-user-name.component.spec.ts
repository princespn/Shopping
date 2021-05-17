import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeEmailUserNameComponent } from './change-email-user-name.component';

describe('ChangeEmailUserNameComponent', () => {
  let component: ChangeEmailUserNameComponent;
  let fixture: ComponentFixture<ChangeEmailUserNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeEmailUserNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeEmailUserNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
