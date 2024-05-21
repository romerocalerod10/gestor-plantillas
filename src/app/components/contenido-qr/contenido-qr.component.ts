import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Contenido} from "../../models/Contenido";

@Component({
  selector: 'app-contenido-qr',
  templateUrl: './contenido-qr.component.html',
  styleUrls: ['./contenido-qr.component.sass']
})
export class ContenidoQrComponent {

  @Input('disabled') disabled: boolean = false;
  @Input('contenidoActual') contenidoActual: Contenido = new Contenido();

  @Output('contenidoEvent') contenidoEvent: EventEmitter<any> = new EventEmitter<any>();


  selectedFiles: File[] = [];
  isDragOver: boolean = false;
  previewUrl: string | ArrayBuffer | null = null;
  constructor() {
  }

  modificarContenido() {
    this.contenidoActual.tamano_fuente = -1;
    this.contenidoEvent.emit(this.contenidoActual);
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (file && file.type === 'image/bmp') {
        this.selectedFiles = [file]; // Solo permitimos un archivo
        this.previewFile(file);
      }
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = false;
    if (event.dataTransfer && event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      const file = event.dataTransfer.files[0];
      if (file && file.type === 'image/bmp') {
        this.selectedFiles = [file]; // Solo permitimos un archivo
        this.previewFile(file);
      }
    }
  }

  previewFile(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.previewUrl = reader.result;
    };
    reader.readAsDataURL(file);
  }
}
