import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Estudiante } from 'src/app/shared/models/estudiante';
import { EstudiantesService } from '../estudiantes.service';

@Component({
  selector: 'app-editar-estudiante',
  templateUrl: './editar-estudiante.component.html',
  styleUrls: ['./editar-estudiante.component.css']
})
export class EditarEstudianteComponent implements OnInit {

  estudiante: Estudiante | undefined;
  profileForm = new FormGroup({
    name: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required)
    
  })

  constructor(private _location: Location, private estudiantesSvc: EstudiantesService, public route: ActivatedRoute, private toastr: ToastrService) { }
id:string|undefined;
  ngOnInit(): void {
    const idProfe = this.route.snapshot.params['id'];
    this.estudiantesSvc.getOneUser(idProfe).subscribe(res=>this.profileForm.patchValue({name: res?.name,
    lastName:res?.lastName,
  email:res?.email}))
  }
  backClicked() {
    this._location.back();
  }
  onSubmit(){
    this.toastr.success("Has editado el estudiante"+this.profileForm.value.name,"Éxito")
    const docente ={
      name: this.profileForm.value.name,
      lastName: this.profileForm.value.lastName,
      email: this.profileForm.value.email,
      fechaActualizacion: new Date()
    }
    const idProfe = this.route.snapshot.params['id'];
    this.estudiantesSvc.editUser(idProfe,docente)

  }

  onDelete(){
    this.toastr.error("Has borrado el estudiante"+this.profileForm.value.name,"Éxito")
    const idProfe = this.route.snapshot.params['id'];
    this.estudiantesSvc.borraUser(idProfe)
    this._location.back();
  }
}
