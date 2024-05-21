import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Contenido} from "../../models/Contenido";
import {Texto} from "../../models/Texto";

@Component({
  selector: 'app-contenido-estatico',
  templateUrl: './contenido-estatico.component.html',
  styleUrls: ['./contenido-estatico.component.sass']
})
export class ContenidoEstaticoComponent {

  @Input('disabled') disabled: boolean = false;
  @Input('contenidoActual') contenidoActual: Contenido = new Contenido();

  @Output('contenidoEvent') contenidoEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  modificarContenido() {
    if (this.contenidoActual.centrado) {
      this.contenidoActual.posicion_x = 0;
    }
    this.contenidoEvent.emit(this.contenidoActual);
  }
}
