import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Módilo personalizado
import { PrimerNgModule } from "./primer-ng/primer-ng.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PrimerNgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
