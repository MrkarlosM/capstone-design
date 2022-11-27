import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { proyects } from 'src/app/shared/models/proyect';

@Component({
  selector: 'app-edit-proy',
  templateUrl: './edit-proy.component.html',
  styleUrls: ['./edit-proy.component.css']
})
export class EditProyComponent implements OnInit {

  //Llamamos los proyectos
  proyects = proyects
  //Inicializamos el título y la descripción
  title = ""
  description = ""
  proyPic = ""
  constructor(private router: Router) { }

  //Funciones que se ejecutan al inicio
  ngOnInit() {
    //Se obtiene el resultado
    const result = this.getProy();
    //Se asignan título y descripción
    this.title = result.title;
    this.description = result.description;
    this.proyPic = result.proyPic;
  }

  getProy(): any {
    //Se obtiene la url completa y se modifica para obtener el final
    const a = this.router.url.split('/').pop();
    //Se busca el proyecto que tenga la id especificada
    let result = proyects.find(item => item.id === a);
    //Retorna el resultado
    return result
  }

}
