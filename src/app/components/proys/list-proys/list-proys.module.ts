import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListProysRoutingModule } from './list-proys-routing.module';
import { ListProysComponent } from './list-proys.component';


@NgModule({
  declarations: [
    ListProysComponent
  ],
  imports: [
    CommonModule,
    ListProysRoutingModule
  ]
})
export class ListProysModule { }
