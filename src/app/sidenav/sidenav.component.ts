import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isExpanded = false;
  element: HTMLElement;

  toggleActive(event:any){
    event.preventDefault();
    if(this.element !== undefined){
      this.element.style.backgroundColor = "white";
      this.element.style.color = "#3F51B5";
    } 
    var target = event.currentTarget;
    target.style.backgroundColor = "#3F51B5";
    target.style.color = "white";
    this.element = target;
  }

  clearActive(event:any){
    event.preventDefault();
    if(this.element !== undefined){
      this.element.style.backgroundColor = "white";
      this.element.style.color = "#3F51B5";
    } 
  }

}
