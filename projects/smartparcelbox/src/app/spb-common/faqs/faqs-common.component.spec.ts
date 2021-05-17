import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsCommonComponent } from './faqs-common.component';

describe('FaqsCommonComponent', () => {
  let component: FaqsCommonComponent;
  let fixture: ComponentFixture<FaqsCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqsCommonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqsCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
