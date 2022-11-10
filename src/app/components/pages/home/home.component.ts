import { Component, OnInit } from '@angular/core';
import { proyects } from 'src/app/shared/models/proyect';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
proyects = proyects
  ngOnInit(): void {
  }


}
