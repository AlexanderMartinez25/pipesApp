import { Component } from '@angular/core';
import { interval } from 'rxjs';

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

  //KeyValue Pipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Otawwa, Canada'
  }

  // Jsonpipe
  heroes = [
    {
      nombre: 'Superman',
      value: true
    },
    {
      nombre: 'Robin',
      value: false
    },
    {
      nombre: 'Acuaman',
      value: false
    }
  ]

  //Async Pipe

  miObservable = interval(2000) // 0,1,2,3,4,5

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa')
    }, 3500)
  })
}
