import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-ver-estudiantes',
  templateUrl: './ver-estudiantes.component.html',
  styleUrls: ['./ver-estudiantes.component.css']
})
export class VerEstudiantesComponent implements OnInit {

  constructor(private userSvc: UsersService) { 
  }

  name = new FormControl('');
  cantidadTotal = 0;
  cantidadPag = 5;
  estudiantes: any[] | undefined;
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
    this.userSvc.getUsersPaginate('ESTUDIANTES',this.cantidadPag).subscribe(res=>this.estudiantes=res);
    //Los usuarios totales
    this.userSvc.getAllUsers('ESTUDIANTES').subscribe(res=>this.cantidadTotal=res.length);
  }
  paginate(event: any) {
    /*Si el evento de cambiar página sucede, al array inicial le agregamos un slice con el primer elemento que debería
    más el total*/
    //this.docentes1 = this.docentes0.slice(event.first, this.cantidadPag + event.first)
    this.userSvc.getAllUsers('PROFESORES').subscribe(res=>this.estudiantes = res.slice(event.first, this.cantidadPag + event.first));
  }

  searchName() {
    this.userSvc.getUsersSearch('PROFESORES',this.name.value).subscribe(res=>this.estudiantes=res);
  }
  clear() {
    this.userSvc.getUsersPaginate('PROFESORES',this.cantidadPag).subscribe(res=>this.estudiantes=res);
  }
}
