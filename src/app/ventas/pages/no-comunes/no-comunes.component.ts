import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // I18nSelect
  nombre: string = 'Susana';
  genero: string = 'fememino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'fememino': 'invitarla'
  }

  // I18nPlural
  clientes: string[] = ['Maria', 'Jose', 'Juan', 'Alexander', 'Fátima', 'Diana']
  clientesMapa = {
    '=0': 'no tenemos ningún cliente',
    '=1': 'tenemos un cliente',
    'other': 'tenemos # clientes'
  }

  cambiarPersona() {
    this.nombre = 'Alexander';
    this.genero = 'masculino';
  }

  borrarCliente() {
    this.clientes.pop();
  }

}
