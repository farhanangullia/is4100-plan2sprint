import { Component, OnInit } from '@angular/core';
import * as project1Data from '../../../data/project1_onesprint.json'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
    console.log(<any>project1Data.title);
  }

}
