import { EditProyComponent } from './components/proys/edit-proy/edit-proy.component';
import { ListProysComponent } from './components/proys/list-proys/list-proys.component';
import { ProyectComponent } from './components/proys/proyect/proyect.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarDocentesComponent } from './components/users/agregar-docentes/agregar-docentes.component';
import { VerDocentesComponent } from './components/users/ver-docentes/ver-docentes.component';
import { AgregarEstudiantesComponent } from './components/users/agregar-estudiantes/agregar-estudiantes.component';
import { VerEstudiantesComponent } from './components/users/ver-estudiantes/ver-estudiantes.component';
import { UsuariosMenuComponent } from './components/users/usuarios-menu/usuarios-menu.component';
import { EditarDocenteComponent } from './components/users/editar-docente/editar-docente.component';
import { EditarEstudianteComponent } from './components/users/editar-estudiante/editar-estudiante.component';
import { NewProyComponent } from './components/proys/new-proy/new-proy.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) },
  { path: 'agregar-docentes', component: AgregarDocentesComponent },
  { path: 'ver-docentes', component: VerDocentesComponent },
  { path: 'agregar-estudiantes', component: AgregarEstudiantesComponent },
  { path: 'ver-estudiantes', component: VerEstudiantesComponent },
  { path: 'usuarios-menu', component: UsuariosMenuComponent },
  { path: 'editar-docente', component: EditarDocenteComponent },
  { path: 'editar-estudiante', component: EditarEstudianteComponent },
  { path: 'detail/:id', component: ProyectComponent },
  {path: 'new-proy', component: NewProyComponent},
{path:  'list-proys', component: ListProysComponent},
{path: 'edit-proy/:id', component: EditProyComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
