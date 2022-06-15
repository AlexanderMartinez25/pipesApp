import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimerNgModule } from '../primer-ng/primer-ng.module';

import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';



@NgModule({
  declarations: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent
  ],
  exports: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent
  ],
  // solo va a funcionar en este módulo
  imports: [
    CommonModule,
    PrimerNgModule
  ]
})
export class VentasModule { }
