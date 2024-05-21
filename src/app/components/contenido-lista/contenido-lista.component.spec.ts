import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoListaComponent } from './contenido-lista.component';

describe('ContenidoListaComponent', () => {
  let component: ContenidoListaComponent;
  let fixture: ComponentFixture<ContenidoListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenidoListaComponent]
    });
    fixture = TestBed.createComponent(ContenidoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
