import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CompraComponent } from './components/compra/compra.component';
import { HogarComponent } from './components/hogar/hogar.component';
import { CasasComponent } from './components/casas/casas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CompraComponent,
    HogarComponent,
    CasasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
