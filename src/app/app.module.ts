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
import { InmuebleComponent } from './components/inmueble/inmueble.component';
import { Banner1InmuebleComponent } from './components/inmueble/banner1-inmueble/banner1-inmueble.component';
import { Banner2InmuebleComponent } from './components/inmueble/banner2-inmueble/banner2-inmueble.component';
import { Banner3InmuebleComponent } from './components/inmueble/banner3-inmueble/banner3-inmueble.component';
import { RemodelaComponent } from './components/remodela/remodela.component';
import { Banner1RemodelaComponent } from './components/remodela/banner1-remodela/banner1-remodela.component';
import { Banner2RemodelaComponent } from './components/remodela/banner2-remodela/banner2-remodela.component';
import { Banner3RemodelaComponent } from './components/remodela/banner3-remodela/banner3-remodela.component';
import { Formulario1Component } from './components/remodela/banner3-remodela/formulario1/formulario1.component';
import { Formulario2Component } from './components/remodela/banner3-remodela/formulario2/formulario2.component';
import { Formulario3Component } from './components/remodela/banner3-remodela/formulario3/formulario3.component';
import { Banner4RemodelaComponent } from './components/remodela/banner4-remodela/banner4-remodela.component';
import { FinanciamientoComponent } from './components/financiamiento/financiamiento.component';
import { Banner1FinanciamientoComponent } from './components/financiamiento/banner1-financiamiento/banner1-financiamiento.component';
import { Banner2FinanciamientoComponent } from './components/financiamiento/banner2-financiamiento/banner2-financiamiento.component';
import { Banner3FinanciamientoComponent } from './components/financiamiento/banner3-financiamiento/banner3-financiamiento.component';

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
    Banner4VendeComponent,
    InmuebleComponent,
    Banner1InmuebleComponent,
    Banner2InmuebleComponent,
    Banner3InmuebleComponent,
    RemodelaComponent,
    Banner1RemodelaComponent,
    Banner2RemodelaComponent,
    Banner3RemodelaComponent,
    Formulario1Component,
    Formulario2Component,
    Formulario3Component,
    Banner4RemodelaComponent,
    FinanciamientoComponent,
    Banner1FinanciamientoComponent,
    Banner2FinanciamientoComponent,
    Banner3FinanciamientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
