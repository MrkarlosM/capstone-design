import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { proyects } from 'src/app/shared/models/proyect';


@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.css']
})
export class ProyectComponent implements OnInit {
  //Llamamos los proyectos
  proyects = proyects
  //Inicializamos el título y la descripción
  title = ""
  description = ""
  constructor(private router: Router) { }

  //Funciones que se ejecutan al inicio
  ngOnInit() {
    //Se obtiene el resultado
    const result = this.getProy();
    //Se asignan título y descripción
    this.title = result.title;
    this.description = result.description;
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
