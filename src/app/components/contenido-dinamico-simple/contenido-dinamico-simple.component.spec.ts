import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoDinamicoSimpleComponent } from './contenido-dinamico-simple.component';

describe('ContenidoDinamicoSimpleComponent', () => {
  let component: ContenidoDinamicoSimpleComponent;
  let fixture: ComponentFixture<ContenidoDinamicoSimpleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenidoDinamicoSimpleComponent]
    });
    fixture = TestBed.createComponent(ContenidoDinamicoSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
