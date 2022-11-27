import { proyects } from 'src/app/shared/models/proyect';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-proys',
  templateUrl: './list-proys.component.html',
  styleUrls: ['./list-proys.component.css']
})
export class ListProysComponent implements OnInit {

  constructor() { }
  proyects = proyects
  id = "";
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
