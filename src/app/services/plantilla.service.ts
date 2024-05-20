import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Plantilla} from "../models/Plantilla";

@Injectable({
  providedIn: 'root'
})
export class PlantillaService {

  constructor(private http: HttpClient) { }

  cargarPlantillaBienvenido(): Observable<Plantilla> {
    return this.http.get<Plantilla>('./assets/plantillas/bienvenido.json');
  }
  cargarPlantillaListadoParadas(): Observable<Plantilla> {
    return this.http.get<Plantilla>('./assets/plantillas/listadoParadas.json');
  }
  cargarPlantillaTomaServicio(): Observable<Plantilla> {
    return this.http.get<Plantilla>('./assets/plantillas/tomaServicio.json');
  }
  cargarPlantillaPagoDirecto(): Observable<Plantilla> {
    return this.http.get<Plantilla>('./assets/plantillas/pagoDirecto.json');
  }
  cargarPlantillaPagoDirectoAnulado(): Observable<Plantilla> {
    return this.http.get<Plantilla>('./assets/plantillas/pagoDirectoAnulado.json');
  }
  cargarPlantillaPagoDirectoIV(): Observable<Plantilla> {
    return this.http.get<Plantilla>('./assets/plantillas/pagoDirectoIV.json');
  }
  cargarPlantillaControlPasajerosPorcentaje(): Observable<Plantilla> {
    return this.http.get<Plantilla>('./assets/plantillas/controlPasajerosPorcentaje.json');
  }
  cargarPlantillaControlPasajerosInspector(): Observable<Plantilla> {
    return this.http.get<Plantilla>('./assets/plantillas/controlPasajerosInspector.json');
  }
}
