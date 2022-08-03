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
    Banner4HogarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
