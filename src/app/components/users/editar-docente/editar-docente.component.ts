import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-docente',
  templateUrl: './editar-docente.component.html',
  styleUrls: ['./editar-docente.component.css']
})
export class EditarDocenteComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit(): void {
  }
  backClicked() {
    this._location.back();
  }
}
