import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCommonComponent } from './about-common.component';

describe('AboutCommonComponent', () => {
  let component: AboutCommonComponent;
  let fixture: ComponentFixture<AboutCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutCommonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
