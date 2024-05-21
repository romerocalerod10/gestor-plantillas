import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Contenido} from "../../models/Contenido";
import {Texto} from "../../models/Texto";

@Component({
  selector: 'app-contenido-dinamico-simple',
  templateUrl: './contenido-dinamico-simple.component.html',
  styleUrls: ['./contenido-dinamico-simple.component.sass']
})
export class ContenidoDinamicoSimpleComponent {

  @Input('disabled') disabled: boolean = false;
  @Input('contenidoActual') contenidoActual: Contenido = new Contenido();

  @Output('contenidoEvent') contenidoEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
  }

  modificarContenido() {
    console.log('Modificar contenido dinamico simple')
    if (this.contenidoActual.centrado) {
      this.contenidoActual.posicion_x = 0;
    }
    this.contenidoEvent.emit(this.contenidoActual);
  }

}
