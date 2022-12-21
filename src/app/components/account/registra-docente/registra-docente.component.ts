import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { DocentesService } from './../../users/docentes/docentes.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Igroup } from './../../../shared/models/igroup';
import { AfireService } from './../../../shared/services/afire.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-registra-docente',
  templateUrl: './registra-docente.component.html',
  styleUrls: ['./registra-docente.component.css']
})
export class RegistraDocenteComponent implements OnInit {
  registrarUsuario: FormGroup
  igroups: Igroup[] = [];
  loading = false;
  @Output() childToParent = new EventEmitter<Boolean>();
  constructor(private fb: FormBuilder, public svcItems: AfireService, private afAuth: AngularFireAuth, private toastr: ToastrService,
    private docSvC: DocentesService, private router: Router) {
    this.registrarUsuario = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern("^[0-9]*$")]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      repetirPassword: ['', Validators.required],
      igroup: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.svcItems.getAllIGroups('GRUPO_INVESTIGACION').subscribe(res => this.igroups = res)
  }

  registrar() {
    const email = this.registrarUsuario.value.email;
    const password = this.registrarUsuario.value.password;
    const repetirPassword = this.registrarUsuario.value.repetirPassword;
    const validity = this.registrarUsuario.status;
    const docente = {
      name: this.registrarUsuario.value.name,
      lastName: this.registrarUsuario.value.lastName,
      email: this.registrarUsuario.value.email,
      fechaActualizacion: new Date(),
      carrera: this.registrarUsuario.value.carrera!,
      igroup: this.registrarUsuario.value.igroup!,
      type: "DOCENTE"
    }
    console.log("Formulario", this.registrarUsuario)

    if (password !== repetirPassword) {
      this.toastr.error("Las contraseñas no son iguales", "Error")
      return;
    }
    if (validity !== 'VALID') {
      this.toastr.error("El formulario está mal diligenciado", "Error");
      return;
    }
    const closer = true
    this.childToParent.emit(closer);
    this.loading = true
    this.afAuth.createUserWithEmailAndPassword(email, password).then((user) => {
      const uid = user.user?.uid;
      this.loading = false;
      const succesMessage = "El usuario " + user.user?.email + " fue creado correctamente.";
      this.toastr.success(succesMessage, "Éxito");
      this.afAuth.currentUser.then(user => console.log(user))
      this.docSvC.crearUserWithId(JSON.parse(JSON.stringify(docente)), uid!).then(() => {
        this.router.navigate(['/home']);


      })
        .catch(err => console.log("Error crear Usuario", err))
    }).catch((error) => {
      this.toastr.error(this.registroError(error.code), "Error")
      this.loading = false;
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
