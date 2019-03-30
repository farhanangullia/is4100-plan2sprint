import { Component, OnInit, Inject } from '@angular/core';
import * as project1Data from '../../../data/project1_onesprint.json';
import * as project2Data from '../../../data/project2_onesprint.json';
import * as project3Data from '../../../data/project3_onesprint.json';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allProjs: Array<any>;
  projectTitle: string;
  projectDescrption: string;

  constructor(public dialog: MatDialog) {
    this.allProjs = new Array();
  }

  ngOnInit() {
    // console.log("test");
    // console.log(localStorage);
    // console.log('ab', this.allProjs);
    localStorage.clear()
    localStorage.setItem(project1Data.projectId, JSON.stringify(project1Data));
    localStorage.setItem(project2Data.projectId, JSON.stringify(project2Data));
    localStorage.setItem(project3Data.projectId, JSON.stringify(project3Data));

    for (let i = 1; i <= localStorage.length; i++) {
      console.log(localStorage.key(i))
      var project = JSON.parse(localStorage.getItem(i.toString()))
      console.log(project)
      this.allProjs.push(project);
    }

    console.log(this.allProjs);

  }

  projectModal(templateRef) {
    let dialogRef = this.dialog.open(templateRef, {
      height: '500px',
      width: '600px',
      // data: {projectTitle: this.projectTitle, description: this.projectDescrption}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
  }
}

// @Component({
//   selector: 'create-project-dialog',
// })
// export class CreateProjectDialog {
//   constructor(
//     public dialogRef: MatDialogRef<CreateProjectDialog>) { }

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

  

