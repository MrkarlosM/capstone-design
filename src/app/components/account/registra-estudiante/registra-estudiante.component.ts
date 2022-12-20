import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Igroup } from './../../../shared/models/igroup';
import { AfireService } from './../../../shared/services/afire.service';
import { Observable, map } from 'rxjs';
import { Component, OnInit, Pipe } from '@angular/core';
import { Carreras } from 'src/app/shared/models/carreras';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import * as firebase from 'firebase/app';

import 'firebase/functions';
import { EstudiantesService } from '../../users/estudiantes/estudiantes.service';

@Component({
  selector: 'app-registra-estudiante',
  templateUrl: './registra-estudiante.component.html',
  styleUrls: ['./registra-estudiante.component.css']
})
export class RegistraEstudianteComponent implements OnInit {
  carreras: Carreras[] = [];
  igroups: Igroup[] = [];
  registrarUsuario: FormGroup
  selectedCity: Carreras = {
    name: ''
  };
  uid: any;

  constructor(public svcItems: AfireService, public fb: FormBuilder, public afAuth: AngularFireAuth, public toastr: ToastrService,
    public estSvC: EstudiantesService) {
    this.registrarUsuario = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      carrera: ['', Validators.required],
      telefono: ['', Validators.required],
      password: ['', Validators.required],
      repetirPassword: ['', Validators.required],
      igroup: ['', Validators.required],
    })
  }


  ngOnInit(): void {
    this.svcItems.getAllCarreras('CARRERAS').subscribe(res => this.carreras = res)
    this.svcItems.getAllIGroups('GRUPO_INVESTIGACION').subscribe(res => this.igroups = res)
  }

  registrar() {
    const email = this.registrarUsuario.value.email;
    const password = this.registrarUsuario.value.password;
    const repetirPassword = this.registrarUsuario.value.repetirPassword;
    const validity = this.registrarUsuario.status;
    const estudiante ={
      name: this.registrarUsuario.value.name,
      lastName: this.registrarUsuario.value.lastName,
      email: this.registrarUsuario.value.email,
      fechaActualizacion: new Date()
    }
    this.afAuth.createUserWithEmailAndPassword(email,password).then((user)=>{
      const uid = user.user?.uid;
      this.estSvC.crearUserWithId(estudiante, uid).then(res=>console.log(res)).catch(err=>console.log("Error Crear Usuario",err))
    }).catch((error)=>{
      console.log(error)
    })



     
  }
  

}
