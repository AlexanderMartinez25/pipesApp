import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// Módilo personalizado
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  // solo va a funcionar en este módulo
  imports: [
    BrowserModule,
    AppRouterModule,
    VentasModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
