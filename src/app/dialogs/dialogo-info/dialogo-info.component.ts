import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-dialogo-info',
  templateUrl: './dialogo-info.component.html',
  styleUrls: ['./dialogo-info.component.sass']
})
export class DialogoInfoComponent implements OnInit{

  tipo: number = 0;
  lista: string[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private dataService: DataService) {
  }

  ngOnInit(): void {
    this.tipo = this.data.tipo;
    this.lista = this.dataService.contenidoDinamicoPlantilla2;
  }

}
