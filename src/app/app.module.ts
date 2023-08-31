import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TataraAbueloComponent } from './padreHijo/tatara-abuelo/tatara-abuelo.component';
import { AbueloComponent } from './padreHijo/abuelo/abuelo.component';
import { PadreComponent } from './padreHijo/padre/padre.component';
import { HijoComponent } from './padreHijo/hijo/hijo.component';
import { BisAbueloComponent } from './PadreHijo2/bis-abuelo/bis-abuelo.component';
import { AbueloComponent2 } from './PadreHijo2/abuelo/abuelo.component';

@NgModule({
  declarations: [
    AppComponent,
    TataraAbueloComponent,
    AbueloComponent,
    PadreComponent,
    HijoComponent,
    BisAbueloComponent,
    AbueloComponent2
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
