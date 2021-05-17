import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreRowComponent } from './store-row.component';

describe('StoreRowComponent', () => {
  let component: StoreRowComponent;
  let fixture: ComponentFixture<StoreRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
