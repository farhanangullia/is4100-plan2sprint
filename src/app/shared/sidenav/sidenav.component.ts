import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  notHomePage: Boolean = false;
  location = '';

  currentProjectId: any;

  constructor(private router: Router) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.location = event.url
    })
  }

  ngOnInit() {
    console.log('called')
    console.log(this.location);

    // if (this.location != "/home") {
    //   this.notHomePage = true;
    // }
  }


  isExpanded = false;
  element: HTMLElement;

  toggleActive(event: any, component: string) {
    console.log(event)
    event.preventDefault();
    if (this.element !== undefined) {
      this.element.style.backgroundColor = "white";
      this.element.style.color = "#3F51B5";
    }
    var target = event.currentTarget;
    target.style.backgroundColor = "#3F51B5";
    target.style.color = "white";
    this.element = target;
    if (this.router.url == component) {
      return;
    }
    else {
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

  clearActive(event: any) {
    event.preventDefault();
    if (this.element !== undefined) {
      this.element.style.backgroundColor = "white";
      this.element.style.color = "#3F51B5";
    }
  }

  goToPage(component: string) {
    if (this.router.url == component) {
      return;
    }
    else {
      sessionStorage.setItem("page", "component");
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

  redirectToUserstories(event: any) {
    this.currentProjectId = localStorage.getItem('currentProjectId');
    this.router.navigateByUrl('/' + this.currentProjectId + "/userstories");
    if (this.element !== undefined) {
      this.element.style.backgroundColor = "white";
      this.element.style.color = "#3F51B5";
    }
    var target = event.currentTarget;
    target.style.backgroundColor = "#3F51B5";
    target.style.color = "white";
    this.element = target;
  }

  redirectToPastSprints(event: any) {
    this.currentProjectId = localStorage.getItem('currentProjectId');
    this.router.navigateByUrl('/' + this.currentProjectId + "/pastsprints");
    if (this.element !== undefined) {
      this.element.style.backgroundColor = "white";
      this.element.style.color = "#3F51B5";
    }
    var target = event.currentTarget;
    target.style.backgroundColor = "#3F51B5";
    target.style.color = "white";
    this.element = target;
  }

  redirectToCurrentSprint(event: any) {
    this.currentProjectId = localStorage.getItem('currentProjectId');
    this.router.navigateByUrl('/' + this.currentProjectId + "/currentsprint");
    if (this.element !== undefined) {
      this.element.style.backgroundColor = "white";
      this.element.style.color = "#3F51B5";
    }
    var target = event.currentTarget;
    target.style.backgroundColor = "#3F51B5";
    target.style.color = "white";
    this.element = target;
  }

}