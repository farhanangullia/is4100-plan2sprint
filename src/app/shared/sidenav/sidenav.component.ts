import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private router: Router) { }

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

  goToPage(component: string){
    if (this.router.url == component){
      return;
    }
    else{
      this.router.navigate([component]).then(
        success => {
          if (!success) {
            console.log("success")
          }
        }, 
        error => {
          console.log(error)
        }
      )
    }
  }

}
