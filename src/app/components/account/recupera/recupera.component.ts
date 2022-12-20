import { Igroup } from './../../../shared/models/igroup';
import { map, Observable } from 'rxjs';
import { AfireService } from './../../../shared/services/afire.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recupera',
  templateUrl: './recupera.component.html',
  styleUrls: ['./recupera.component.css']
})
export class RecuperaComponent implements OnInit {

  constructor(private svcItems:AfireService) { 

  }

  ngOnInit(): void {
  }

}
