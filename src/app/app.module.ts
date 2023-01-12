import { CardModule } from 'primeng/card';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeModule } from './components/pages/home/home.module';
import { NewProyModule } from './components/proys/new-proy/new-proy.module';
import { NewProyComponent } from './components/proys/new-proy/new-proy.component';
import { ListProysModule } from './components/proys/list-proys/list-proys.module';
import { ProyectComponent } from './components/proys/proyect/proyect.component';
import { PrimengModule } from './primeng.module';
import { VerDocentesComponent } from './components/users/docentes/ver-docentes/ver-docentes.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VerEstudiantesComponent } from './components/users/estudiantes/ver-estudiantes/ver-estudiantes.component';
import { AgregarEstudiantesComponent } from './components/users/estudiantes/agregar-estudiantes/agregar-estudiantes.component';
import { AgregarDocentesComponent } from './components/users/docentes/agregar-docentes/agregar-docentes.component';
import { UsuariosMenuComponent } from './components/users/usuarios-menu/usuarios-menu.component';
import { EditarDocenteComponent } from './components/users/docentes/editar-docente/editar-docente.component';
import { EditarEstudianteComponent } from './components/users/estudiantes/editar-estudiante/editar-estudiante.component';
import { EditProyComponent } from './components/proys/edit-proy/edit-proy.component';
import { RegistraEstudianteComponent } from './components/account/registra-estudiante/registra-estudiante.component';
import { RegistraDocenteComponent } from './components/account/registra-docente/registra-docente.component';
import { LoginComponent } from './components/account/login/login.component';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TratamientoDatosComponent } from './components/tratamiento-datos/tratamiento-datos.component';
import { TableFilterPipe } from './components/users/docentes/ver-docentes/table-filter.pipe';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { RecuperaComponent } from './components/account/recupera/recupera.component';
import {DropdownModule} from 'primeng/dropdown';



@NgModule({
  declarations: [
    AppComponent,
    NewProyComponent,
    ProyectComponent,
    VerDocentesComponent,
    VerEstudiantesComponent,
    AgregarEstudiantesComponent,
    AgregarDocentesComponent,
    UsuariosMenuComponent, EditarDocenteComponent, EditarEstudianteComponent, EditProyComponent, RegistraEstudianteComponent, RegistraDocenteComponent, LoginComponent, TratamientoDatosComponent, TableFilterPipe, SpinnerComponent, RecuperaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,ToastrModule.forRoot(),SweetAlert2Module.forRoot(),
    NgbModule,
    HomeModule,DropdownModule,
    NewProyModule,
    ListProysModule,
    PrimengModule,CardModule,FontAwesomeModule, DialogModule, BrowserAnimationsModule, AngularFireModule.initializeApp(environment.firebase), AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
