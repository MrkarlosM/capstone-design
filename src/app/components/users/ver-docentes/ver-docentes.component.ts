import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { docentes } from 'src/app/shared/models/docente';

@Component({
  selector: 'app-ver-docentes',
  templateUrl: './ver-docentes.component.html',
  styleUrls: ['./ver-docentes.component.css']
})
export class VerDocentesComponent implements OnInit {

  docentes = docentes;
  name = "";

  constructor() { }

  ngOnInit(): void {
  }


}
