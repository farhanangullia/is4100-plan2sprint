import { Component, OnInit } from '@angular/core';
import * as project1Data from '../../../data/project1_onesprint.json';
import * as project2Data from '../../../data/project2_onesprint.json';
import * as project3Data from '../../../data/project3_onesprint.json';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allProjs: Array<any>;

  constructor() {
    this.allProjs = new Array();
  }

  ngOnInit() {
    console.log("test");
    console.log(localStorage);
    console.log('ab', this.allProjs);
    // this.jsonFiles.push(JSON.stringify(project1Data),JSON.stringify(project2Data), JSON.stringify(project3Data));
    // let project1 = new ProjectEntity(project1Data.projectId, project1Data.title, project1Data.description);
    // let project2 = new ProjectEntity(project2Data.projectId, project2Data.title, project2Data.description);
    // let project3 = new ProjectEntity(project3Data.projectId,project3Data.title, project3Data.description);
    // this.projects.push(project1, project2, project3);

    // this.userStories = project1Data.sprints[0].userStories;
    // console.log(this.userStories);
    // console.log(this.projects.length)
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



}
