import { Component, OnInit } from '@angular/core';
import { proyects } from 'src/app/shared/models/proyect';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  proyects0 = proyects
  cantidad = proyects.length;
  proyects1 = this.proyects0.slice(0, 5);
  ngOnInit(): void {
  }

  paginate(event: any) {
    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
    this.proyects1 = this.proyects0.slice(event.first, 5 + event.first)
    console.log(event.rows)
  }

}
