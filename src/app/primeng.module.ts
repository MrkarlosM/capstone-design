import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
const myModule = [CardModule, ButtonModule];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, myModule
  ],
  exports:[myModule]
})
export class PrimengModule { }
