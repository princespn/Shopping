import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkDeleteButtonComponent } from './bulk-delete-button.component';

describe('BulkDeleteButtonComponent', () => {
  let component: BulkDeleteButtonComponent;
  let fixture: ComponentFixture<BulkDeleteButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkDeleteButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkDeleteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
