import { Component, OnInit } from '@angular/core';
import { proyects } from 'src/app/shared/models/proyect';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  //Llamamos todos los items
  proyects0 = proyects
  //Cantidad total de items
  cantidadTotal = proyects.length;
  //Cantidad de items por página
  cantidadPag = 5;

  //Creamos el array inicial
  proyects1 = this.proyects0.slice(0, this.cantidadPag);
  ngOnInit(): void {
  }

  paginate(event: any) {
    /*Si el evento de cambiar página sucede, al array inicial le agregamos un slice con el primer elemento que debería
    más el total*/
    this.proyects1 = this.proyects0.slice(event.first, this.cantidadPag + event.first)
    console.log(event.rows)
  }

}
