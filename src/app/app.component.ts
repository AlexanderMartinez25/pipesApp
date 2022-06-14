import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = 'alExANder mARTínEz';
  valor: number = 1000;
  obj ={
    nombre:'alexander'
  }

  mostrarNombre() {
    console.log(this.nombre);
    
  }
}
