import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TomarFoto2Component } from './tomar-foto2.component';

describe('TomarFoto2Component', () => {
  let component: TomarFoto2Component;
  let fixture: ComponentFixture<TomarFoto2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TomarFoto2Component]
    });
    fixture = TestBed.createComponent(TomarFoto2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
