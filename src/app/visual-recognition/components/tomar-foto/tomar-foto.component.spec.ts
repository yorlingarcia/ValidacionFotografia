import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TomarFotoComponent } from './tomar-foto.component';

describe('TomarFotoComponent', () => {
  let component: TomarFotoComponent;
  let fixture: ComponentFixture<TomarFotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TomarFotoComponent]
    });
    fixture = TestBed.createComponent(TomarFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
