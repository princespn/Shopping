import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuillTypeComponent } from './quill.component';

describe('QuillComponent', () => {
  let component: QuillTypeComponent;
  let fixture: ComponentFixture<QuillTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuillTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuillTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
