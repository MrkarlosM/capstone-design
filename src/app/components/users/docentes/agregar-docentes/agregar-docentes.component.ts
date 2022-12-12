import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Docente } from 'src/app/shared/models/docente';
import { DocentesService } from '../docentes.service';

@Component({
  selector: 'app-agregar-docentes',
  templateUrl: './agregar-docentes.component.html',
  styleUrls: ['./agregar-docentes.component.css']
})
export class AgregarDocentesComponent implements OnInit {

  docente: Docente | undefined;
  profileForm = new FormGroup({
    name: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required)
    
  })

  constructor(private _location: Location, private docentesSvc: DocentesService, private toastr: ToastrService) { }
id:string|undefined;
  ngOnInit(): void {
  }
  backClicked() {
    this._location.back();
  }
  onSubmit(){
    this.toastr.info("Has agregado el docente","Éxito")
    console.log(this.profileForm)
    const docente ={
      name: this.profileForm.value.name,
      lastName: this.profileForm.value.lastName,
      email: this.profileForm.value.email,
      fechaActualizacion: new Date()
    }
    this.docentesSvc.crearDocente(docente);

  }
}
