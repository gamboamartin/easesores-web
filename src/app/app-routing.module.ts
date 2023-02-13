import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HogarComponent} from "./components/hogar/hogar.component";
import {CompraComponent} from "./components/compra/compra.component";
import {VendeComponent} from "./components/vende/vende.component";
import {InmuebleComponent} from "./components/inmueble/inmueble.component";
import {RemodelaComponent} from "./components/remodela/remodela.component";
import {FinanciamientoComponent} from "./components/financiamiento/financiamiento.component";

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
    path: 'compra/inmueble',
    component: InmuebleComponent
  },
  {
    path: 'remodela',
    component: RemodelaComponent
  },
  {
    path: 'financiamiento',
    component: FinanciamientoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
