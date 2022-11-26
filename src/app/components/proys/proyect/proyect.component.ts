import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { getSafePropertyAccessString } from '@angular/compiler';
import { Proyect, proyects } from 'src/app/shared/models/proyect';


@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.css']
})
export class ProyectComponent implements OnInit {
  proyects = proyects
  title = ""
  description = ""
  constructor(private route: ActivatedRoute, private router: Router,
    private location: Location) { }

  ngOnInit() {
    const result = this.getProy();
    this.title = result.title;
    this.description = result.description;
  }

  getProy(): any {
    const a = this.router.url.split('/').pop();
    console.log("Sirve: " + a)
    let result = proyects.find(item => item.id === a);
    console.log(result?.title)
    return result
  }

}
