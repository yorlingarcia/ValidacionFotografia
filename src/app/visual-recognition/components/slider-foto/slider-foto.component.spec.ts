import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderFotoComponent } from './slider-foto.component';

describe('SliderFotoComponent', () => {
  let component: SliderFotoComponent;
  let fixture: ComponentFixture<SliderFotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderFotoComponent]
    });
    fixture = TestBed.createComponent(SliderFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
