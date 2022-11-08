import { Component, OnInit } from '@angular/core';
import { docentes } from 'src/app/shared/models/docente';

@Component({
  selector: 'app-ver-docentes',
  templateUrl: './ver-docentes.component.html',
  styleUrls: ['./ver-docentes.component.css']
})
export class VerDocentesComponent implements OnInit {

  docentes = docentes;

  constructor() { }

  ngOnInit(): void {
  }

}
