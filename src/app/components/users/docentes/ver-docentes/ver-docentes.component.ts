import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { Docente, docentes } from 'src/app/shared/models/docente';
import { DocentesService } from './docentes.service';

@Component({
  selector: 'app-ver-docentes',
  templateUrl: './ver-docentes.component.html',
  styleUrls: ['./ver-docentes.component.css']
})
export class VerDocentesComponent implements OnInit {

  name = new FormControl('');
  //Llamamos todos los items
  //docentes0 = docentes
  //Cantidad total de items
  cantidadTotal = 0;
  //Cantidad de items por página
  cantidadPag = 5;
  //Creamos el array inicial
  //docentes1 = this.docentes0.slice(0, this.cantidadPag);
  docentes: any[] | undefined;
  constructor(public firestore: AngularFirestore, private userSvc: DocentesService) {
  }

  ngOnInit() {
    //Los usuarios para paginar
    this.userSvc.getUsersPaginate('PROFESORES',this.cantidadPag).subscribe(res=>this.docentes=res);
    //Los usuarios totales
    this.userSvc.getAllUsers('PROFESORES').subscribe(res=>this.cantidadTotal=res.length);
  }

  paginate(event: any) {
    /*Si el evento de cambiar página sucede, al array inicial le agregamos un slice con el primer elemento que debería
    más el total*/
    //this.docentes1 = this.docentes0.slice(event.first, this.cantidadPag + event.first)
    this.userSvc.getAllUsers('PROFESORES').subscribe(res=>this.docentes = res.slice(event.first, this.cantidadPag + event.first));
  }

  searchName() {
    this.userSvc.getUsersSearch('PROFESORES',this.name.value).subscribe(res=>this.docentes=res);
  }
  clear() {
    this.userSvc.getUsersPaginate('PROFESORES',this.cantidadPag).subscribe(res=>this.docentes=res);
  }
}
