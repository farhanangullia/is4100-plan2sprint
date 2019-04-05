import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-current-sprint',
  templateUrl: './current-sprint.component.html',
  styleUrls: ['./current-sprint.component.css']
})

export class CurrentSprintComponent implements OnInit {
  displayedColumns: string[] = ['userstories', 'tasks'];
  project : any;
  currentSprint : any;
  currentUserStories: any;


  constructor(
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        const projectId = params.projectId;
        this.project = JSON.parse(localStorage.getItem(projectId));
        const latestSprint = this.project.default.sprints.length;
        this.currentSprint = this.project.default.sprints[latestSprint - 1];
        this.currentUserStories = this.currentSprint.userStories;
        console.log(this.currentUserStories)
      }
    )
  }
}
