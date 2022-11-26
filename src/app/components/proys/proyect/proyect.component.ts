import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { getSafePropertyAccessString } from '@angular/compiler';
import { proyects } from 'src/app/shared/models/proyect';


@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.css']
})
export class ProyectComponent implements OnInit {
  proyects = proyects
  constructor(private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.getProy();
  }

  getProy() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);

  }

}
