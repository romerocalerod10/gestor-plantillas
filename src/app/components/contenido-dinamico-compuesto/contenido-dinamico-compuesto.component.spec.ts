import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoDinamicoCompuestoComponent } from './contenido-dinamico-compuesto.component';

describe('ContenidoDinamicoCompuestoComponent', () => {
  let component: ContenidoDinamicoCompuestoComponent;
  let fixture: ComponentFixture<ContenidoDinamicoCompuestoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenidoDinamicoCompuestoComponent]
    });
    fixture = TestBed.createComponent(ContenidoDinamicoCompuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
