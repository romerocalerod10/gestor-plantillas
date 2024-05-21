import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Contenido} from "../../models/Contenido";
import {Texto} from "../../models/Texto";

@Component({
  selector: 'app-contenido-dinamico-compuesto',
  templateUrl: './contenido-dinamico-compuesto.component.html',
  styleUrls: ['./contenido-dinamico-compuesto.component.sass']
})
export class ContenidoDinamicoCompuestoComponent {

  @Input('disabled') disabled: boolean = false;
  @Input('contenidoActual') contenidoActual: Contenido = new Contenido();

  @Output('contenidoEvent') contenidoEvent: EventEmitter<any> = new EventEmitter<any>();

  id: number = -1;
  texto: string = '';
  posicionSeleccionada: number = 0;

  constructor() {
  }

  cambiarAncho() {

  }

  deleteTextoDinamico(id: number) {
    this.contenidoActual.textos.splice(id, 1);
  }

  addContenidoDinamicoCompuesto() {
    const texto: Texto = new Texto();
    texto.id = this.id;
    texto.texto = this.texto;
    texto.posicion = this.posicionSeleccionada;
    this.contenidoActual.textos.push(texto);
    this.modificarContenido();
    this.id = -1;
    this.texto = "";
    this.posicionSeleccionada = 0;
  }

  modificarContenido() {
    if (this.contenidoActual.centrado) {
      this.contenidoActual.posicion_x = 0;
    }
    // this.contenidoActual.tipo = 4;
    this.contenidoEvent.emit(this.contenidoActual);
  }
}
