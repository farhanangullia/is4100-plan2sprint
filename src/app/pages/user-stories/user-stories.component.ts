import { Component, OnInit } from '@angular/core';
import * as project1Data from '../../../data/project1_onesprint.json'
import { TouchSequence } from 'selenium-webdriver';

class UserStory {
  priority: string;
  details: string;

  constructor(priority: string, details: string) {
    this.priority = priority;
    this.details = details;
  }
}

@Component({
  selector: 'app-user-stories',
  templateUrl: './user-stories.component.html',
  styleUrls: ['./user-stories.component.css']
})
export class UserStoriesComponent implements OnInit {

  userStories2: Array<UserStory>;

  userStories: any[];

  targetUserstories: any[];

  priorityLevels: any[];

  newStoryPriorityLevel: any;

  newStoryDetails: any;

  displayDialog: boolean;

  currentProject: any;


  constructor() {
    this.userStories2 = [];
  }

  ngOnInit() {
    if (localStorage.getItem('project1') === null) {
      localStorage.setItem('project1', JSON.stringify(project1Data));
    }

    var currentProjCookie = localStorage.getItem('project1');
    this.currentProject = JSON.parse(currentProjCookie);
    console.log(this.currentProject.default.sprints[0].userStories);
    this.userStories = this.currentProject.default.availableUserStories;
    console.log(this.userStories);
    this.targetUserstories = this.currentProject.default.sprints[0].userStories;
    this.priorityLevels = [
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: 3 },
      { label: '4', value: 4 },
      { label: '5', value: 5 },
      { label: '6', value: 6 },
      { label: '7', value: 7 },
      { label: '8', value: 8 },
      { label: '9', value: 9 },
      { label: '10', value: 10 }
    ];
  }


  newStoryClick(event: Event) {
    this.displayDialog = true;
    event.preventDefault();
  }

  onDialogHide() {
    this.newStoryPriorityLevel = null;
    this.newStoryDetails = null;
  }

  createUserStory(event: Event) {

    // this.userStories.push({ 'priority': this.newStoryPriorityLevel, 'details': this.newStoryDetails });
    this.displayDialog = false;
    this.currentProject.default.availableUserStories.push({ 'priority': this.newStoryPriorityLevel, 'details': this.newStoryDetails, 'tasks': [] });
    console.log('New: ', this.currentProject);
    localStorage.setItem('project1', JSON.stringify(this.currentProject));
    // var retrievedObj = localStorage.getItem('userStories');
    // console.log('retrieved obj ', JSON.parse(retrievedObj));
  }
}
