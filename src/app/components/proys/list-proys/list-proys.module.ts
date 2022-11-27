import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProysRoutingModule } from './list-proys-routing.module';
import { ListProysComponent } from './list-proys.component';
import { PaginatorModule } from 'primeng/paginator';
import { TableFilterPipe } from '../../proys/list-proys/proy-filter.pipe';


@NgModule({
  declarations: [
    ListProysComponent, TableFilterPipe
  ],
  imports: [
    CommonModule,
    ListProysRoutingModule, PaginatorModule
  ]
})
export class ListProysModule { }
