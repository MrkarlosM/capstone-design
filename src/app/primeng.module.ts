import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import {PaginatorModule} from 'primeng/paginator';

const myModule = [CardModule, ButtonModule, MenubarModule, PaginatorModule];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, myModule
  ],
  exports: [myModule]
})
export class PrimengModule { }
