import {Component, OnInit} from '@angular/core';
import {Plantilla} from "../../models/Plantilla";
import {Contenido} from "../../models/Contenido";
import {Texto} from "../../models/Texto";
import {DataService} from "../../services/data.service";
import {ToastrService} from "ngx-toastr";
import {PlantillaService} from "../../services/plantilla.service";
import {FontSizeCalculatorService} from "../../services/font-size-calculator.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogoInfoComponent} from "../../dialogs/dialogo-info/dialogo-info.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  title = 'gestor-plantillas';

  plantilla: Plantilla = new Plantilla();

  datosDinamicosSeleccionados: number = 0;

  anchoTicket: number = 200;
  altoTicket: number = 500;
  nombrePlantilla: string = "";
  numeroPlantilla: number = 0;

  contenidoActual: Contenido = new Contenido();

  tipoSeleccionado: number = 0;

  textoDinamicoCompuesto: string = "";
  idDinamicoCompuesto: number = -1;
  posicionSeleccionada: number = 0;
  textosDinamicosCompuestos: Texto[] = [];

  contenidoDinamico: any;
  contenidosDinamico: any[] = [];

  editMode: boolean[] = [];

  plantillaSeleccionada: number = 0;
  plantillaSeleccionadaJSON: Plantilla = new Plantilla();

  incrementoYPlantillaSeleccionada: { [key: string]: number } = {};
  incrementoYPlantillaNueva: { [key: string]: number } = {};


  constructor(private dataService: DataService,
              private toastr: ToastrService,
              private plantillaService: PlantillaService,
              private fontSizeCalculator: FontSizeCalculatorService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    // this.cambiarDatosDinamicosSeleccionados();
    // this.cambiarPlantilla();
    console.log('ngOnInit', this.plantilla);
  }

  calculateFontSizeForText(contenido: Contenido) {
    const fontSize = this.fontSizeCalculator.calculateFontSize(this.contenidosDinamico[contenido.id], contenido.tamano_fuente, this.anchoTicket, contenido.negrita);
    console.log(`El tamaño de fuente adecuado es: ${fontSize}pt`);
    return fontSize;

  }

  cambiarPlantilla() {
    this.plantilla = new Plantilla();
    switch (this.plantillaSeleccionada) {
      case 1:
        this.plantillaService.cargarPlantillaBienvenido().subscribe(
          data => {
            this.plantillaSeleccionadaJSON = data;
            this.nombrePlantilla = this.plantillaSeleccionadaJSON.nombre;
            this.numeroPlantilla = this.plantillaSeleccionadaJSON.id;
            this.cambiarDatosDinamicosSeleccionados(1);
            this.contenidoActual = new Contenido();
            this.calcularIncrementosYPlantillasSeleccionadas();
            console.log('Plantilla cargada:', this.plantillaSeleccionadaJSON);
          },
          error => {
            console.error('Error al cargar la plantilla:', error);
          }
        );
        break;
      case 2:
        this.plantillaService.cargarPlantillaListadoParadas().subscribe(
          data => {
            this.plantillaSeleccionadaJSON = data;
            this.nombrePlantilla = this.plantillaSeleccionadaJSON.nombre;
            this.numeroPlantilla = this.plantillaSeleccionadaJSON.id;
            this.cambiarDatosDinamicosSeleccionados(2);
            this.contenidoActual = new Contenido();
            this.calcularIncrementosYPlantillasSeleccionadas();
            console.log('Plantilla cargada:', this.plantillaSeleccionadaJSON);
          },
          error => {
            console.error('Error al cargar la plantilla:', error);
          }
        );
        break;
      case 3:
        this.plantillaService.cargarPlantillaTomaServicio().subscribe(
          data => {
            this.plantillaSeleccionadaJSON = data;
            this.nombrePlantilla = this.plantillaSeleccionadaJSON.nombre;
            this.numeroPlantilla = this.plantillaSeleccionadaJSON.id;
            this.cambiarDatosDinamicosSeleccionados(3);
            this.contenidoActual = new Contenido();
            this.calcularIncrementosYPlantillasSeleccionadas();
            console.log('Plantilla cargada:', this.plantillaSeleccionadaJSON);
          },
          error => {
            console.error('Error al cargar la plantilla:', error);
          }
        );
        break;
      case 4:
        this.plantillaService.cargarPlantillaPagoDirecto().subscribe(
          data => {
            this.plantillaSeleccionadaJSON = data;
            this.nombrePlantilla = this.plantillaSeleccionadaJSON.nombre;
            this.numeroPlantilla = this.plantillaSeleccionadaJSON.id;
            this.cambiarDatosDinamicosSeleccionados(4);
            this.contenidoActual = new Contenido();
            this.calcularIncrementosYPlantillasSeleccionadas();
            console.log('Plantilla cargada:', this.plantillaSeleccionadaJSON);
          },
          error => {
            console.error('Error al cargar la plantilla:', error);
          }
        );
        break;
      case 5:
        this.plantillaService.cargarPlantillaPagoDirectoAnulado().subscribe(
          data => {
            this.plantillaSeleccionadaJSON = data;
            this.nombrePlantilla = this.plantillaSeleccionadaJSON.nombre;
            this.numeroPlantilla = this.plantillaSeleccionadaJSON.id;
            this.cambiarDatosDinamicosSeleccionados(5);
            this.contenidoActual = new Contenido();
            this.calcularIncrementosYPlantillasSeleccionadas();
            console.log('Plantilla cargada:', this.plantillaSeleccionadaJSON);
          },
          error => {
            console.error('Error al cargar la plantilla:', error);
          }
        );
        break;
      case 6:
        this.plantillaService.cargarPlantillaPagoDirectoIV().subscribe(
          data => {
            this.plantillaSeleccionadaJSON = data;
            this.nombrePlantilla = this.plantillaSeleccionadaJSON.nombre;
            this.numeroPlantilla = this.plantillaSeleccionadaJSON.id;
            this.cambiarDatosDinamicosSeleccionados(6);
            this.contenidoActual = new Contenido();
            this.calcularIncrementosYPlantillasSeleccionadas();
            console.log('Plantilla cargada:', this.plantillaSeleccionadaJSON);
          },
          error => {
            console.error('Error al cargar la plantilla:', error);
          }
        );
        break;
      case 7:
        this.plantillaService.cargarPlantillaControlPasajerosPorcentaje().subscribe(
          data => {
            this.plantillaSeleccionadaJSON = data;
            this.nombrePlantilla = this.plantillaSeleccionadaJSON.nombre;
            this.numeroPlantilla = this.plantillaSeleccionadaJSON.id;
            this.cambiarDatosDinamicosSeleccionados(7);
            this.contenidoActual = new Contenido();
            this.calcularIncrementosYPlantillasSeleccionadas();
            console.log('Plantilla cargada:', this.plantillaSeleccionadaJSON);
          },
          error => {
            console.error('Error al cargar la plantilla:', error);
          }
        );
        break;
      case 8:
        this.plantillaService.cargarPlantillaControlPasajerosInspector().subscribe(
          data => {
            this.plantillaSeleccionadaJSON = data;
            this.nombrePlantilla = this.plantillaSeleccionadaJSON.nombre;
            this.numeroPlantilla = this.plantillaSeleccionadaJSON.id;
            this.cambiarDatosDinamicosSeleccionados(8);
            this.contenidoActual = new Contenido();
            this.calcularIncrementosYPlantillasSeleccionadas();
            console.log('Plantilla cargada:', this.plantillaSeleccionadaJSON);
          },
          error => {
            console.error('Error al cargar la plantilla:', error);
          }
        );
        break;
    }

  }

  cambiarTipo() {
    console.log('cambiarTipo', this.contenidoActual.tipo);
    // if (this.conteni) {
    //
    // }
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
    console.log('addContenido plantilla antes', this.plantilla, this.tipoSeleccionado);
    this.contenidoActual.posicion_y = this.contenidoActual.posicion_y - Math.abs(Object.keys(this.incrementoYPlantillaNueva).length > 0 ? this.incrementoYPlantillaNueva[Object.keys(this.incrementoYPlantillaNueva).length - 1] : 0);
    const tipo = this.contenidoActual.tipo;
    this.plantilla.contenido.push(this.contenidoActual);
    this.calcularIncrementosYPlantillasNueva();
    this.contenidoActual = new Contenido();
    this.contenidoActual.tipo = tipo;
    // this.contenidoActual.posicion_y = this.incrementoYPlantillaNueva[Object.keys(this.incrementoYPlantillaNueva).length-1]
    console.log('addContenido plantilla despues', this.plantilla);
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
      case 6:
        this.contenidosDinamico = this.dataService.contenidoDinamicoPlantilla6;
        break;
      case 7:
        this.contenidosDinamico = this.dataService.contenidoDinamicoPlantilla7;
        break;
      case 8:
        this.contenidosDinamico = this.dataService.contenidoDinamicoPlantilla8;
        break;
      case 9:
        this.contenidosDinamico = this.dataService.contenidoDinamicoPlantilla9;
        break;
      case 10:
        this.contenidosDinamico = this.dataService.contenidoDinamicoPlantilla10;
        break;
      case 11:
        this.contenidosDinamico = this.dataService.contenidoDinamicoPlantilla11;
        break;
      case 12:
        this.contenidosDinamico = this.dataService.contenidoDinamicoPlantilla12;
        break;
      case 13:
        this.contenidosDinamico = this.dataService.contenidoDinamicoPlantilla13;
        break;
      case 14:
        this.contenidosDinamico = this.dataService.contenidoDinamicoPlantilla14;
        break;
      case 15:
        this.contenidosDinamico = this.dataService.contenidoDinamicoPlantilla15;
        break;
      case 16:
        this.contenidosDinamico = this.dataService.contenidoDinamicoPlantilla16;
        break;
      case 17:
        this.contenidosDinamico = this.dataService.contenidoDinamicoPlantilla17;
        break;
      case 18:
        this.contenidosDinamico = this.dataService.contenidoDinamicoPlantilla18;
        break;
      case 19:
        this.contenidosDinamico = this.dataService.contenidoDinamicoPlantilla19;
        break;
      case 20:
        this.contenidosDinamico = this.dataService.contenidoDinamicoPlantilla20;
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
  calcularIncrementosYPlantillasSeleccionadas() {
    let total = 0;
    this.plantillaSeleccionadaJSON.contenido.forEach((contenido, index) => {
      total += contenido.posicion_y;

      this.incrementoYPlantillaSeleccionada[index.toString()] = total;
      if (contenido.tipo == 2) {
        for (let i = contenido.id; i < this.contenidosDinamico.length - 1; i++) {
          total += contenido.separacion_elemento_lista;
        }
      }
    });
    console.log('INCREMENTO', this.incrementoYPlantillaSeleccionada);
  }

  // Calcula el incremento acumulativo de la posición Y
  calcularIncrementosYPlantillasNueva() {
    let total = 0;
    this.plantilla.contenido.forEach((contenido, index) => {
      total += contenido.posicion_y;
      this.incrementoYPlantillaNueva[index.toString()] = total;
    });
    console.log('INCREMENTO', this.incrementoYPlantillaNueva);
  }

  actualizarContenidoActual(contenido: Contenido) {
    console.log('actualizarContenidoActual', contenido);
    this.contenidoActual = contenido;
  }

  abrirDialogoInfo(tipo: number) {
    const dialogRef = this.dialog.open(DialogoInfoComponent, {
      data: {
        tipo: tipo
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo ha sido cerrado');
    });
  }

  private transformPlantilla(plantilla: Plantilla): Plantilla {
    const transformedPlantilla = { ...plantilla };
    transformedPlantilla.contenido = transformedPlantilla.contenido.map(contenido => {
      if (contenido.tipo === 4) {
        return { ...contenido, tipo: 1 };
      }
      return contenido;
    });
    return transformedPlantilla;
  }

  descargarPlantilla() {
    if (this.plantilla.id == -1) {
      this.toastr.error('Debes crear una plantilla para poder exportar sus datos', 'Error');
      return;
    }
    const transformedPlantilla = this.transformPlantilla(this.plantilla);
    const json = JSON.stringify(transformedPlantilla, null, 2); // Convertir objeto a JSON
    const blob = new Blob([json], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'plantilla.json';
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
