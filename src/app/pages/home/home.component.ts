import {Component, OnInit} from '@angular/core';
import {Plantilla} from "../../models/Plantilla";
import {Contenido} from "../../models/Contenido";
import {Texto} from "../../models/Texto";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements  OnInit {
  title = 'gestor-plantillas';

  plantillas: Plantilla[] = [];

  plantillaSeleccionada: number = 2;

  anchoTicket: number = 200;
  altoTicket: number = 500;
  nombrePlantilla: string = "";
  numeroPlantilla: number = 0;

  contenidoActual: Contenido = new Contenido();

  tipoSeleccionado: number = 0;
  idDinamico: number = -1;
  textoFijo: string = "";
  isCentrado: boolean = false;
  anchoSeleccionado: number = 0;
  tamanoFuente: number = 0;
  posicionX: number = 0;
  posicionY: number = 0;
  isNegrita: boolean = false;
  separacionElementoLista: number = -1;

  textoDinamicoCompuesto: string = "";
  idDinamicoCompuesto: number = -1;
  posicionSeleccionada: number = 0;
  textosDinamicosCompuestos: Texto[] = [];

  contenidoDinamico: any;
  contenidosDinamico: any[] = [];

  editMode: boolean[] = [];


  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.cambiarPlantilla();
  }

  cambiarTipo() {

  }

  cambiarAncho() {

  }

  addLinea(contenido: string) {
    if (contenido !== undefined && contenido !== null && contenido !== "") {
      this.contenidosDinamico.push(contenido);
    }
    this.contenidoDinamico = "";
  }

  addContenidoDinamicoCompuesto() {

    const elementoDinamicoCompuesto: Texto = {
      id: this.idDinamicoCompuesto,
      texto: this.textoDinamicoCompuesto,
      posicion: this.posicionSeleccionada
    };

    this.textosDinamicosCompuestos.push(elementoDinamicoCompuesto);
    this.contenidoActual.textos.push(elementoDinamicoCompuesto);
  }

  addContenidoDinamico() {
    if (this.contenidoDinamico !== undefined && this.contenidoDinamico !== null && this.contenidoDinamico !== "") {
      this.contenidosDinamico.push(this.contenidoDinamico);
    }
    this.contenidoDinamico = "";
  }

  cambiarPlantilla() {
    console.log("Cambiando plantilla a: " + this.plantillaSeleccionada)
    switch (this.plantillaSeleccionada) {
      case 1:
        this.contenidosDinamico = this.dataService.contenidoDinamicoPlantilla1;
        break;
      case 2:
        this.contenidosDinamico = this.dataService.contenidoDinamicoPlantilla2;
        break;
      case 3:
        this.contenidosDinamico = this.dataService.contenidoDinamicoPlantilla3;
        break;
      case 4:
        this.contenidosDinamico = this.dataService.contenidoDinamicoPlantilla4;
        break;
      case 5:
        this.contenidosDinamico = this.dataService.contenidoDinamicoPlantilla5;
        break;
      default:
        this.contenidosDinamico = this.dataService.contenidoDinamicoPlantilla1;
    }
  }

  enableEdit(index: number) {
    this.editMode = this.contenidosDinamico.map((_, i) => i === index);
  }

  trackByFn(index: any) {
    return index;
  }

  deleteContenido(i: number) {
    this.contenidosDinamico.splice(i, 1);
  }
}
