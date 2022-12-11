import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-estudiante',
  templateUrl: './editar-estudiante.component.html',
  styleUrls: ['./editar-estudiante.component.css']
})
export class EditarEstudianteComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit(): void {
  }
  backClicked() {
    this._location.back();
  }
}
