import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private router: Router,
  ) {
    this.allProjs = new Array();
  }

  ngOnInit() {
    console.log("test");
    console.log(localStorage);
    console.log('ab', this.allProjs);

    // localStorage.clear()

    // this.allProjs.push(project1Data, project2Data, project3Data);

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
      console.log(localStorage.key(i))
      var project = JSON.parse(localStorage.getItem(i.toString()))
      console.log(project)
      this.allProjs.push(project);
    }
    console.log(this.allProjs);
  }

  redirectToUserstories(i) {
    this.router.navigateByUrl('/' + i + "/userstories");
  }

  addProject() {
    var newProject = {
      "default":
      {
        "projectId": "4",
        "title": "Live StreamEr 2.0",
        "description": "Application to stream videos at lightning speed and offers betting services",
        "sprints":
          [
            {
              "sprint": {
                "sprintNum": 1,
                "userStories":
                  [
                    {
                      "userStory": {
                        "priority": 1,
                        "details": "I want to login with my account",
                        "tasks":
                          [
                            {
                              "task": {
                                "description": "Do login UI",
                                "EV": 10,
                                "AC": 10,
                                "PV": 10
                              }


                            },
                            {
                              "task": {
                                "description": "Implement backend logic for login",
                                "EV": 12,
                                "AC": 12,
                                "PV": 12
                              }


                            }
                          ]
                      }

                    },
                    {
                      "userStory": {
                        "priority": 2,
                        "details": "I want to browse channels",
                        "tasks":
                          [
                            {
                              "task": {
                                "description": "Do UI for list of channels",
                                "EV": 15,
                                "AC": 17,
                                "PV": 15
                              }


                            },
                            {
                              "task": {
                                "description": "Implement backend logic for channel routing",
                                "EV": 24,
                                "AC": 32,
                                "PV": 24
                              }
                            }
                          ]
                      }
                    }
                  ]
              }
            }
          ]
      }
    }
    localStorage.setItem(newProject.default.projectId, JSON.stringify(newProject));
    this.allProjs.push(newProject);
  }
}
