import { Docente } from 'src/app/shared/models/docente';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocentesService } from '../docentes.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor(private _location: Location, private docentesSvc: DocentesService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    const idProfe = this.route.snapshot.params['id'];
    this.docentesSvc.getOneUser(idProfe).subscribe(res=>this.profileForm.value.name=res?.name)
    this.docentesSvc.getOneUser(idProfe).subscribe(res=>this.profileForm.value.lastName=res?.lastName)
    this.docentesSvc.getOneUser(idProfe).subscribe(res=>this.profileForm.value.email=res?.email)
  }
  backClicked() {
    this._location.back();
  }
  onSubmit(){
    console.log(this.profileForm)
  }
}
