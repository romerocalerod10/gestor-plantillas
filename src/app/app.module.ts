import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './pages/home/home.component';
import {ToastrModule} from "ngx-toastr";
import {HttpClientModule} from "@angular/common/http";
import { ContenidoEstaticoComponent } from './components/contenido-estatico/contenido-estatico.component';
import { ContenidoDinamicoSimpleComponent } from './components/contenido-dinamico-simple/contenido-dinamico-simple.component';
import { ContenidoDinamicoCompuestoComponent } from './components/contenido-dinamico-compuesto/contenido-dinamico-compuesto.component';
import { ContenidoListaComponent } from './components/contenido-lista/contenido-lista.component';
import { ContenidoQrComponent } from './components/contenido-qr/contenido-qr.component';
import {ShowListPipe} from "./pipes/show-list.pipe";
import { DialogoInfoComponent } from './dialogs/dialogo-info/dialogo-info.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContenidoEstaticoComponent,
    ContenidoDinamicoSimpleComponent,
    ContenidoDinamicoCompuestoComponent,
    ContenidoListaComponent,
    ContenidoQrComponent,
    ShowListPipe,
    DialogoInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
