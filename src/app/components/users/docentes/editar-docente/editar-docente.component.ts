import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Docente } from 'src/app/shared/models/docente';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocentesService } from '../docentes.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-docente',
  templateUrl: './editar-docente.component.html',
  styleUrls: ['./editar-docente.component.css']
})
export class EditarDocenteComponent implements OnInit {
  docente: Docente | undefined;
  profileForm = new FormGroup({
    name: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required)
    
  })

  constructor(private _location: Location, private docentesSvc: DocentesService, public route: ActivatedRoute, private toastr: ToastrService,
    private afAuth: AngularFireAuth) { }
id:string|undefined;
  ngOnInit(): void {
    const idProfe = this.route.snapshot.params['id'];
    this.docentesSvc.getOneUser(idProfe).subscribe(res=>this.profileForm.patchValue({name: res?.name,
    lastName:res?.lastName,
  email:res?.email}))
  }
  backClicked() {
    this._location.back();
  }
  onSubmit(){
    this.toastr.success("Has editado el docente","Éxito")
    const docente ={
      name: this.profileForm.value.name,
      lastName: this.profileForm.value.lastName,
      email: this.profileForm.value.email,
      fechaActualizacion: new Date()
    }
    const idProfe = this.route.snapshot.params['id'];
    this.docentesSvc.editDocente(idProfe,docente)

  }

  onDelete(){
    this.toastr.error("Has borrado el docente","Éxito")
    const idProfe = this.route.snapshot.params['id'];
    this.docentesSvc.borraDocente(idProfe)
    this._location.back();
  }
}
