import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { docentes } from 'src/app/shared/models/docente';

@Component({
  selector: 'app-ver-docentes',
  templateUrl: './ver-docentes.component.html',
  styleUrls: ['./ver-docentes.component.css']
})
export class VerDocentesComponent implements OnInit {

  name = "";
  //Llamamos todos los items
  docentes0 = docentes
  //Cantidad total de items
  cantidadTotal = docentes.length;
  //Cantidad de items por página
  cantidadPag = 5;
  //Creamos el array inicial
  docentes1 = this.docentes0.slice(0, this.cantidadPag);
  items: Observable<any[]>;
  constructor(firestore: AngularFirestore) { 
    this.items = firestore.collection('PROFESORES').valueChanges();
  }

  ngOnInit(): void {
  }
  paginate(event: any) {
    /*Si el evento de cambiar página sucede, al array inicial le agregamos un slice con el primer elemento que debería
    más el total*/
    //this.docentes1 = this.docentes0.slice(event.first, this.cantidadPag + event.first)
    console.log(event.rows)
  }


}
