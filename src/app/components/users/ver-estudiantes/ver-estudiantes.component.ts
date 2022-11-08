import { Component, OnInit } from '@angular/core';
import { estudiantes } from 'src/app/shared/models/estudiante';

@Component({
  selector: 'app-ver-estudiantes',
  templateUrl: './ver-estudiantes.component.html',
  styleUrls: ['./ver-estudiantes.component.css']
})
export class VerEstudiantesComponent implements OnInit {

  constructor() { }

  estudiantes = estudiantes

  ngOnInit(): void {
  }

}
