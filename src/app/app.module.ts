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

@NgModule({
  declarations: [
    AppComponent,
    NewProyComponent,
    ProyectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HomeModule,
    NewProyModule,
    ListProysModule,
    PrimengModule, CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
