import { proyects } from 'src/app/shared/models/proyect';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-proys',
  templateUrl: './list-proys.component.html',
  styleUrls: ['./list-proys.component.css']
})
export class ListProysComponent implements OnInit {

  constructor() { }
  proyects = proyects
  ngOnInit(): void {
  }

}
