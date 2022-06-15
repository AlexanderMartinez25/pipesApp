import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './ventas/pages/basicos/basicos.component';
import { NoComunesComponent } from './ventas/pages/no-comunes/no-comunes.component';
import { NumerosComponent } from './ventas/pages/numeros/numeros.component';
import { OrdenarComponent } from './ventas/pages/ordenar/ordenar.component';


const routes:Routes= [
  {
    path:'',
    component: BasicosComponent,
    pathMatch: 'full'
  },
  {
    path: 'numeros',
    component: NumerosComponent,
  },
  {
    path: 'no-comunes',
    component: NoComunesComponent,
  },
  {
    path: 'ordernar',
    component: OrdenarComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
]


@NgModule({
  // solo va a funcionar en este módulo
  imports: [
    RouterModule.forRoot(routes)
  ],
  // para seru usado por otro componente
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
