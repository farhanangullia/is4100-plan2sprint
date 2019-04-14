import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { Router } from '@angular/router';

import * as project1Data from '../../../data/project1_1sprint.json';
import * as project2Data from '../../../data/project2_2sprint.json';
import * as project3Data from '../../../data/project3_3sprint.json';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import swal from 'sweetalert2';
import { SidenavComponent } from 'src/app/shared/sidenav/sidenav.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allProjs: Array<any>;
  projectTitle: FormControl;
  projectDescription: FormControl;
  createProjectForm: FormGroup;


  constructor(public dialog: MatDialog, private router: Router,
    @Inject(forwardRef(() => SidenavComponent)) private sideNav: SidenavComponent
  ) {
    // this.sideNav = sideNav;
    this.allProjs = new Array();
  }

  ngOnInit() {
    console.log(this.router.url);
    this.sideNav.ngOnInit();
    this.createFormControl();
    this.createForm();
    // console.log("test");
    // console.log(localStorage);
    // console.log('ab', this.allProjs);
    // localStorage.clear();
    localStorage.removeItem('currentProjectId');
    console.log(project1Data);
    if (localStorage.getItem(project1Data.projectId) === null) {
      localStorage.setItem(project1Data.projectId, JSON.stringify(project1Data));
    }
    if (localStorage.getItem(project2Data.projectId) === null) {
      localStorage.setItem(project2Data.projectId, JSON.stringify(project2Data));
    }
    if (localStorage.getItem(project3Data.projectId) === null) {
      localStorage.setItem(project3Data.projectId, JSON.stringify(project3Data));
    }

    for (let i = 1; i <= localStorage.length; i++) {
      console.log(i);
      console.log(localStorage.key(i))
      var project = JSON.parse(localStorage.getItem(i.toString()))
      console.log(project)
      if(project !== null) {
        this.allProjs.push(project);
      }
    }
    console.log(this.allProjs);
  }

  createFormControl() {
    this.projectTitle = new FormControl('', {
      updateOn: 'change'
    })
    this.projectDescription = new FormControl('', {
      updateOn: 'change'
    })
  }

  createForm() {
    this.createProjectForm = new FormGroup({
      projectTitle: this.projectTitle,
      projectDescription: this.projectDescription
    })

    console.log(this.projectTitle, this.projectDescription);
  }

  redirectToUserstories(i) {
    localStorage.setItem('currentProjectId', i);
    this.router.navigateByUrl('/' + i + "/userstories");
  }

  projectModal(templateRef) {
    let dialogRef = this.dialog.open(templateRef, {
      height: '250px',
      width: '300px',
      // data: {projectTitle: this.projectTitle, description: this.projectDescrption}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  onSubmit() {

    if (this.createProjectForm.valid) {
      const projectTitle = this.createProjectForm.value.projectTitle;
      const projectDescription = this.createProjectForm.value.projectDescription;
      this.createJSONObject(projectTitle, projectDescription);
    }
  }
  createJSONObject(title: any, description: any) {
    console.log("title", title)
    console.log("description", description);
    var newProject = {
      default: {
        "projectId": (this.allProjs.length + 1).toString(),
        "title": title,
        "description": description,
        "availableUserStories": [],
        "sprints": [
          {
            "sprintNum": 1,
            "userStories": []
          }
        ]
      }

    }

    if (localStorage.getItem(newProject.default.projectId) === null) {
      localStorage.setItem(newProject.default.projectId, JSON.stringify(newProject));
      console.log(localStorage.getItem(newProject.default.projectId.toString()))
      this.allProjs.push(JSON.parse(localStorage.getItem(newProject.default.projectId.toString())));
    }
    swal.fire({
      type: 'success',
      title: "Project Added",

    }).then(() => {

      this.dialog.closeAll();
    }

    )
  }

}




