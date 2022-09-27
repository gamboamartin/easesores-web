import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HogarComponent} from "./components/hogar/hogar.component";
import {CompraComponent} from "./components/compra/compra.component";
import {VendeComponent} from "./components/vende/vende.component";
import {InmuebleComponent} from "./components/inmueble/inmueble.component";

const routes: Routes = [
  {
    path: '',
    component: HogarComponent
  },
  {
    path: 'compra',
    component: CompraComponent
  },
  {
    path: 'vende',
    component: VendeComponent
  },
  {
    path: 'inmueble',
    component: InmuebleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
