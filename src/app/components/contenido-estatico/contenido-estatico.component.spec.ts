import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoEstaticoComponent } from './contenido-estatico.component';

describe('ContenidoEstaticoComponent', () => {
  let component: ContenidoEstaticoComponent;
  let fixture: ComponentFixture<ContenidoEstaticoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenidoEstaticoComponent]
    });
    fixture = TestBed.createComponent(ContenidoEstaticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
