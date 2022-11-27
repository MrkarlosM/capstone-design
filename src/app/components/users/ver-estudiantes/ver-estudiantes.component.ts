import { Component, OnInit } from '@angular/core';
import { estudiantes } from 'src/app/shared/models/estudiante';

@Component({
  selector: 'app-ver-estudiantes',
  templateUrl: './ver-estudiantes.component.html',
  styleUrls: ['./ver-estudiantes.component.css']
})
export class VerEstudiantesComponent implements OnInit {

  constructor() { }

  name = "";
  //Llamamos todos los items
  estudiantes0 = estudiantes
  //Cantidad total de items
  cantidadTotal = estudiantes.length;
  //Cantidad de items por página
  cantidadPag = 5;
  //Creamos el array inicial
  estudiantes1 = this.estudiantes0.slice(0, this.cantidadPag);

  ngOnInit(): void {
  }
  paginate(event: any) {
    /*Si el evento de cambiar página sucede, al array inicial le agregamos un slice con el primer elemento que debería
    más el total*/
    this.estudiantes1 = this.estudiantes0.slice(event.first, this.cantidadPag + event.first)
    console.log(event.rows)
  }
}
