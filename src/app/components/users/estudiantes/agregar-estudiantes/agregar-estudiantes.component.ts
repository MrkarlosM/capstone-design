import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Estudiante } from 'src/app/shared/models/estudiante';
import { EstudiantesService } from '../estudiantes.service';

@Component({
  selector: 'app-agregar-estudiantes',
  templateUrl: './agregar-estudiantes.component.html',
  styleUrls: ['./agregar-estudiantes.component.css']
})
export class AgregarEstudiantesComponent implements OnInit {


  docente: Estudiante | undefined;
  profileForm = new FormGroup({
    name: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required)
    
  })

  constructor(private _location: Location, private estudiantesSvc: EstudiantesService, private toastr: ToastrService) { }
id:string|undefined;
  ngOnInit(): void {
  }
  backClicked() {
    this._location.back();
  }
  onSubmit(){
    this.toastr.info("Has agregado el estudiante"+this.profileForm.value.name,"Éxito")
    console.log(this.profileForm)
    const docente ={
      name: this.profileForm.value.name,
      lastName: this.profileForm.value.lastName,
      email: this.profileForm.value.email,
      fechaActualizacion: new Date()
    }
    this.estudiantesSvc.crearUser(docente);

  }

}
