import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListRowInputComponent } from './list-row-input.component';

describe('ListRowInputComponent', () => {
  let component: ListRowInputComponent;
  let fixture: ComponentFixture<ListRowInputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRowInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRowInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
