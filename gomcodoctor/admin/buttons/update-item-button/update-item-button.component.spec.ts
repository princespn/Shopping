import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateItemButtonComponent } from './update-item-button.component';

describe('UpdateButtonComponent', () => {
  let component: UpdateItemButtonComponent;
  let fixture: ComponentFixture<UpdateItemButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateItemButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateItemButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
