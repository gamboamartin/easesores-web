import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CompraComponent } from './components/compra/compra.component';
import { HogarComponent } from './components/hogar/hogar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CompraComponent,
    HogarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
