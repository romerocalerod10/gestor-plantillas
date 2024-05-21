import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Contenido} from "../../models/Contenido";
import {Texto} from "../../models/Texto";

@Component({
  selector: 'app-contenido-lista',
  templateUrl: './contenido-lista.component.html',
  styleUrls: ['./contenido-lista.component.sass']
})
export class ContenidoListaComponent {

  @Input('disabled') disabled: boolean = false;
  @Input('contenidoActual') contenidoActual: Contenido = new Contenido();

  @Output('contenidoEvent') contenidoEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  cambiarAncho() {

  }

  modificarContenido() {
    console.log('Modificar contenido lista')
    if (this.contenidoActual.centrado) {
      this.contenidoActual.posicion_x = 0;
    }
    this.contenidoEvent.emit(this.contenidoActual);
  }

}
