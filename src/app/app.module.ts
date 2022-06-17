import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// Módilo personalizado
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//cambiar el locales de la app
import localeEs from "@angular/common/locales/es-CL";
import localeFr from "@angular/common/locales/fr";
import { registerLocaleData } from "@angular/common";
registerLocaleData(localeEs)
registerLocaleData(localeFr)



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
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CL' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
