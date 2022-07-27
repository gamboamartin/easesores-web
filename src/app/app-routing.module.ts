import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompraComponent} from "./components/compra/compra.component";
import {HogarComponent} from "./components/hogar/hogar.component";

const routes: Routes = [
  {
    path: '',
    component: HogarComponent
  },
  {
    path: 'compra',
    component: CompraComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
