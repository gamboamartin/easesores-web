import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CompraComponent } from './components/compra/compra.component';
import { HogarComponent } from './components/hogar/hogar.component';
import { CasasComponent } from './components/casas/casas.component';
import { FooterComponent } from './components/footer/footer.component';
import { TiraImagenesComponent } from './components/hogar/tira-imagenes/tira-imagenes.component';
import { Banner2HogarComponent } from './components/hogar/banner2-hogar/banner2-hogar.component';
import { FormularioHogarComponent } from './components/hogar/formulario-hogar/formulario-hogar.component';
import { BackgroundHogarComponent } from './components/hogar/background-hogar/background-hogar.component';
import { Banner4HogarComponent } from './components/hogar/banner4-hogar/banner4-hogar.component';
import { PaginacionCompraComponent } from './components/compra/paginacion-compra/paginacion-compra.component';
import { VendeComponent } from './components/vende/vende.component';
import { Banner1VendeComponent } from './components/vende/banner1-vende/banner1-vende.component';
import { Banner2VendeComponent } from './components/vende/banner2-vende/banner2-vende.component';
import { Banner3VendeComponent } from './components/vende/banner3-vende/banner3-vende.component';
import { Banner4VendeComponent } from './components/vende/banner4-vende/banner4-vende.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CompraComponent,
    HogarComponent,
    CasasComponent,
    FooterComponent,
    TiraImagenesComponent,
    Banner2HogarComponent,
    FormularioHogarComponent,
    BackgroundHogarComponent,
    Banner4HogarComponent,
    PaginacionCompraComponent,
    VendeComponent,
    Banner1VendeComponent,
    Banner2VendeComponent,
    Banner3VendeComponent,
    Banner4VendeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
