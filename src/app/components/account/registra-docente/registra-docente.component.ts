import { Igroup } from './../../../shared/models/igroup';
import { AfireService } from './../../../shared/services/afire.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registra-docente',
  templateUrl: './registra-docente.component.html',
  styleUrls: ['./registra-docente.component.css']
})
export class RegistraDocenteComponent implements OnInit {
  registrarUsuario: FormGroup
  igroups: Igroup[]=[];
  constructor(private fb: FormBuilder, public svcItems: AfireService) { 
    this.registrarUsuario = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      carrera: ['', Validators.required],
      telefono: ['', Validators.required],
      password: ['', Validators.required],
      repitePassword: ['', Validators.required],
      igroup: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.svcItems.getAllIGroups('GRUPO_INVESTIGACION').subscribe(res=>this.igroups=res)
  }

}
