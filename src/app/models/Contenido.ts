import {Texto} from "./Texto";

export class Contenido {
  tipo: number = 0;
  id: number = -1;
  texto: string = "";
  centrado: boolean = false;
  ancho: number = 0;
  posicion_y: number = 0;
  posicion_x: number = 0;
  tamano_fuente: number = 15;
  negrita: boolean = false;
  separacion_elemento_lista: number = -1;
  textos: Texto[] = [];
}
