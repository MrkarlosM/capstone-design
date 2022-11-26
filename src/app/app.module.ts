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
import { VerDocentesComponent } from './components/users/ver-docentes/ver-docentes.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VerEstudiantesComponent } from './components/users/ver-estudiantes/ver-estudiantes.component';
import { AgregarEstudiantesComponent } from './components/users/agregar-estudiantes/agregar-estudiantes.component';
import { AgregarDocentesComponent } from './components/users/agregar-docentes/agregar-docentes.component';
import { UsuariosMenuComponent } from './components/users/usuarios-menu/usuarios-menu.component';
import { EditarDocenteComponent } from './components/users/editar-docente/editar-docente.component';
import { EditarEstudianteComponent } from './components/users/editar-estudiante/editar-estudiante.component';
import { EditProyComponent } from './components/proys/edit-proy/edit-proy.component';
import { RegistraEstudianteComponent } from './components/account/registra-estudiante/registra-estudiante.component';
import { RegistraDocenteComponent } from './components/account/registra-docente/registra-docente.component';
import { LoginComponent } from './components/account/login/login.component';
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TratamientoDatosComponent } from './components/tratamiento-datos/tratamiento-datos.component';


@NgModule({
  declarations: [
    AppComponent,
    NewProyComponent,
    ProyectComponent,
    VerDocentesComponent,
    VerEstudiantesComponent,
    AgregarEstudiantesComponent,
    AgregarDocentesComponent,
    UsuariosMenuComponent, EditarDocenteComponent, EditarEstudianteComponent, EditProyComponent, RegistraEstudianteComponent, RegistraDocenteComponent, LoginComponent, TratamientoDatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HomeModule,
    NewProyModule,
    ListProysModule,
    PrimengModule, CardModule, FontAwesomeModule, DialogModule,BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
