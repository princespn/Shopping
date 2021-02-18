import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InlineInputEditComponent } from './inline-input-edit.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule } from '@angular/material';

describe('InlineInputEditComponent', () => {
  let component: InlineInputEditComponent;
  let fixture: ComponentFixture<InlineInputEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule],
      declarations: [ InlineInputEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineInputEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
