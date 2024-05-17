import {Component, OnInit} from '@angular/core';
import {DataService} from "./services/data.service";
import {Texto} from "./models/Texto";
import {Plantilla} from "./models/Plantilla";
import {Contenido} from "./models/Contenido";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'gestor-plantillas';

  constructor(){
  }

}
