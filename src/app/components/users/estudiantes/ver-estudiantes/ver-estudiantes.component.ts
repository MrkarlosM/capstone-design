import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EstudiantesService } from '../estudiantes.service';

@Component({
  selector: 'app-ver-estudiantes',
  templateUrl: './ver-estudiantes.component.html',
  styleUrls: ['./ver-estudiantes.component.css']
})
export class VerEstudiantesComponent implements OnInit {

  constructor(private estudiantesSvc: EstudiantesService) { 
  }

  name = new FormControl('');
  cantidadTotal = 0;
  cantidadPag = 5;
  estudiantes: any[] | undefined;
  tipoUser = 'ESTUDIANTES'
  //Llamamos todos los items
  // estudiantes0 = estudiantes
  // //Cantidad total de items
  // cantidadTotal = estudiantes.length;
  // //Cantidad de items por página
  // cantidadPag = 5;
  //Creamos el array inicial
  //estudiantes1 = this.estudiantes0.slice(0, this.cantidadPag);

  ngOnInit() {
    //Los usuarios para paginar
    //Los usuarios para paginar
    this.estudiantesSvc.getUsersPaginate(this.tipoUser,this.cantidadPag).subscribe(res=>this.estudiantes=res);
    //Los usuarios totales
    this.estudiantesSvc.getAllUsers(this.tipoUser).subscribe(res=>this.cantidadTotal=res.length);
  }
  paginate(event: any) {
    /*Si el evento de cambiar página sucede, al array inicial le agregamos un slice con el primer elemento que debería
    más el total*/
    //this.docentes1 = this.docentes0.slice(event.first, this.cantidadPag + event.first)
    this.estudiantesSvc.getAllUsers(this.tipoUser).subscribe(res=>this.estudiantes = res.slice(event.first, this.cantidadPag + event.first));
  }

  searchName() {
    this.estudiantesSvc.getUsersSearch(this.tipoUser,this.name.value).subscribe(res=>this.estudiantes=res);
  }
  clear() {
    this.estudiantesSvc.getUsersPaginate(this.tipoUser,this.cantidadPag).subscribe(res=>this.estudiantes=res);
  }
}
