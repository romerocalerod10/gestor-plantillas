import {Component, OnInit} from '@angular/core';
import {Plantilla} from "../../models/Plantilla";
import {Contenido} from "../../models/Contenido";
import {Texto} from "../../models/Texto";
import {DataService} from "../../services/data.service";
import {ToastrService} from "ngx-toastr";
import {PlantillaService} from "../../services/plantilla.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  title = 'gestor-plantillas';

  plantilla: Plantilla = new Plantilla();

  datosDinamicosSeleccionados: number = 3;

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

  plantillaSeleccionadaSelect: number = 1;
  plantillaSeleccionada: Plantilla = new Plantilla();

  incrementoY: { [key: string]: number } = {};


  constructor(private dataService: DataService,
              private toastr: ToastrService,
              private plantillaService: PlantillaService) {
  }

  ngOnInit(): void {
    this.cambiarDatosDinamicosSeleccionados();
    this.cambiarPlantilla();
  }

  cambiarPlantilla() {

    switch (this.plantillaSeleccionadaSelect) {
      case 1:
        this.plantillaService.cargarPlantillaBienvenido().subscribe(
          data => {
            this.plantillaSeleccionada = data;
            this.nombrePlantilla = this.plantillaSeleccionada.nombre;
            this.numeroPlantilla = this.plantillaSeleccionada.id;
            this.cambiarDatosDinamicosSeleccionados(1);
            this.contenidoActual = new Contenido();
            this.calcularIncrementosY();
            console.log('Plantilla cargada:', this.plantillaSeleccionada);
          },
          error => {
            console.error('Error al cargar la plantilla:', error);
          }
        );
        break;
      case 2:
        this.plantillaService.cargarPlantillaListadoParadas().subscribe(
          data => {
            this.plantillaSeleccionada = data;
            this.nombrePlantilla = this.plantillaSeleccionada.nombre;
            this.numeroPlantilla = this.plantillaSeleccionada.id;
            this.cambiarDatosDinamicosSeleccionados(2);
            this.contenidoActual = new Contenido();
            this.calcularIncrementosY();
            console.log('Plantilla cargada:', this.plantillaSeleccionada);
          },
          error => {
            console.error('Error al cargar la plantilla:', error);
          }
        );
        break;
      case 3:
        this.plantillaService.cargarPlantillaTomaServicio().subscribe(
          data => {
            this.plantillaSeleccionada = data;
            this.nombrePlantilla = this.plantillaSeleccionada.nombre;
            this.numeroPlantilla = this.plantillaSeleccionada.id;
            this.cambiarDatosDinamicosSeleccionados(3);
            this.contenidoActual = new Contenido();
            this.calcularIncrementosY();
            console.log('Plantilla cargada:', this.plantillaSeleccionada);
          },
          error => {
            console.error('Error al cargar la plantilla:', error);
          }
        );
        break;
      case 4:
        this.plantillaService.cargarPlantillaPagoDirecto().subscribe(
          data => {
            this.plantillaSeleccionada = data;
            this.nombrePlantilla = this.plantillaSeleccionada.nombre;
            this.numeroPlantilla = this.plantillaSeleccionada.id;
            this.cambiarDatosDinamicosSeleccionados(4);
            this.contenidoActual = new Contenido();
            this.calcularIncrementosY();
            console.log('Plantilla cargada:', this.plantillaSeleccionada);
          },
          error => {
            console.error('Error al cargar la plantilla:', error);
          }
        );
        break;
      case 5:
        this.plantillaService.cargarPlantillaPagoDirectoAnulado().subscribe(
          data => {
            this.plantillaSeleccionada = data;
            this.nombrePlantilla = this.plantillaSeleccionada.nombre;
            this.numeroPlantilla = this.plantillaSeleccionada.id;
            this.cambiarDatosDinamicosSeleccionados(5);
            this.contenidoActual = new Contenido();
            this.calcularIncrementosY();
            console.log('Plantilla cargada:', this.plantillaSeleccionada);
          },
          error => {
            console.error('Error al cargar la plantilla:', error);
          }
        );
        break;
      case 6:
        this.plantillaService.cargarPlantillaPagoDirectoIV().subscribe(
          data => {
            this.plantillaSeleccionada = data;
            this.nombrePlantilla = this.plantillaSeleccionada.nombre;
            this.numeroPlantilla = this.plantillaSeleccionada.id;
            this.cambiarDatosDinamicosSeleccionados(6);
            this.contenidoActual = new Contenido();
            this.calcularIncrementosY();
            console.log('Plantilla cargada:', this.plantillaSeleccionada);
          },
          error => {
            console.error('Error al cargar la plantilla:', error);
          }
        );
        break;
      case 7:
        this.plantillaService.cargarPlantillaControlPasajerosPorcentaje().subscribe(
          data => {
            this.plantillaSeleccionada = data;
            this.nombrePlantilla = this.plantillaSeleccionada.nombre;
            this.numeroPlantilla = this.plantillaSeleccionada.id;
            this.cambiarDatosDinamicosSeleccionados(7);
            this.contenidoActual = new Contenido();
            this.calcularIncrementosY();
            console.log('Plantilla cargada:', this.plantillaSeleccionada);
          },
          error => {
            console.error('Error al cargar la plantilla:', error);
          }
        );
        break;
      case 8:
        this.plantillaService.cargarPlantillaControlPasajerosInspector().subscribe(
          data => {
            this.plantillaSeleccionada = data;
            this.nombrePlantilla = this.plantillaSeleccionada.nombre;
            this.numeroPlantilla = this.plantillaSeleccionada.id;
            this.cambiarDatosDinamicosSeleccionados(8);
            this.contenidoActual = new Contenido();
            this.calcularIncrementosY();
            console.log('Plantilla cargada:', this.plantillaSeleccionada);
          },
          error => {
            console.error('Error al cargar la plantilla:', error);
          }
        );
        break;
    }

  }

  cambiarTipo() {

  }

  cambiarAncho() {

  }

  cambiarPosicion() {

  }

  addPlantilla() {

    if (this.nombrePlantilla == '' && this.numeroPlantilla == 0) {
      this.toastr.error('Para crear una plantilla debe introducir el nombre y el número', 'Error');
      return;
    }

    const plantilla = new Plantilla();
    plantilla.id = this.numeroPlantilla;
    plantilla.nombre = this.nombrePlantilla;
    this.plantilla = plantilla;

    this.toastr.success('Plantilla creada correctamente', 'Éxito');
  }

  isPlantillaCreada() {
    // return this.plantilla.id === -1;
    return false;
  }


  addContenido() {
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

  cambiarDatosDinamicosSeleccionados(id?: number) {
    console.log("Cambiando plantilla a: " + this.datosDinamicosSeleccionados)
    if (id !== undefined) {
      this.datosDinamicosSeleccionados = id;
    }
    switch (this.datosDinamicosSeleccionados) {
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

  deleteTextoDinamicoCompuesto(id: number) {
    this.textosDinamicosCompuestos.splice(id, 1);
    this.contenidoActual.textos.splice(id, 1);
  }

  deleteContenidoActual() {
    this.contenidoActual = new Contenido();
    this.textosDinamicosCompuestos = [];
  }

  contenidoSeleccionado(contenido: Contenido) {
    console.log('ENTRO en contenidoSeleccionado', contenido);
    this.contenidoActual = contenido;
  }
  // Calcula el incremento acumulativo de la posición Y
  calcularIncrementosY() {
    let total = 0;
    this.plantillaSeleccionada.contenido.forEach((contenido, index) => {
      total += contenido.posicion_y;
      this.incrementoY[index.toString()] = total;
    });
    console.log('INCREMENTO', this.incrementoY);
  }
}
