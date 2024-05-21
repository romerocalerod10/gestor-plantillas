import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoQrComponent } from './contenido-qr.component';

describe('ContenidoQrComponent', () => {
  let component: ContenidoQrComponent;
  let fixture: ComponentFixture<ContenidoQrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenidoQrComponent]
    });
    fixture = TestBed.createComponent(ContenidoQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
