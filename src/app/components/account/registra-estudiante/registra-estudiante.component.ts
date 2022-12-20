import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Igroup } from './../../../shared/models/igroup';
import { AfireService } from './../../../shared/services/afire.service';
import { Observable, map } from 'rxjs';
import { Component, EventEmitter, OnInit, Output, Pipe } from '@angular/core';
import { Carreras } from 'src/app/shared/models/carreras';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import * as firebase from 'firebase/app';

import 'firebase/functions';
import { EstudiantesService } from '../../users/estudiantes/estudiantes.service';
import { Estudiante } from 'src/app/shared/models/estudiante';

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
  loading = false;
  @Output() childToParent = new EventEmitter<Boolean>();


  constructor(private svcItems: AfireService, private fb: FormBuilder, private afAuth: AngularFireAuth, private toastr: ToastrService,
    private estSvC: EstudiantesService, private router: Router) {
    this.registrarUsuario = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      carrera: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.maxLength(10),Validators.minLength(10), Validators.pattern("^[0-9]*$")]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
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
    const estudiante = {
      name: this.registrarUsuario.value.name,
      lastName: this.registrarUsuario.value.lastName,
      email: this.registrarUsuario.value.email,
      fechaActualizacion: new Date(),
      carrera: this.registrarUsuario.value.carrera!,
      igroup: this.registrarUsuario.value.igroup!,
    }

    if (password !== repetirPassword) {
      this.toastr.error("Las contraseñas no son iguales", "Error")
      return;
    }
    if (validity !== 'VALID') {
      this.toastr.error("El formulario está mal diligenciado", "Error");
      console.log(this.registrarUsuario)
      return;
    } 
      this.loading=true
      this.afAuth.createUserWithEmailAndPassword(email, password).then((user) => {
        const uid = user.user?.uid;
        this.loading =false;
        const succesMessage = "El usuario "+user.user?.email+" fue creado correctamente.";
        this.toastr.success(succesMessage, "Éxito");
        this.estSvC.crearUserWithId(JSON.parse(JSON.stringify(estudiante)), uid!).then(()=>{
          this.router.navigate(['/home']);
          const closer = true
          this.childToParent.emit(closer);
        })
          .catch(err => console.log("Error crear Usuario", err))
      }).catch((error) => {
        this.toastr.error(this.registroError(error.code), "Error")
        this.loading =false;
      })
      
  }

  registroError(code: string) {
    let message = "Error desconocido"
    switch (code) {
      case 'auth/email-already-in-use':
        return message = "El correo ya está en uso";
      case 'auth/weak-password':
        return message = "Contraseña muy débil";
      default:
        return message
    }

  }


}
