import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta raíz que carga el componente HomeComponent
  // Puedes agregar más rutas aquí según sea necesario
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
