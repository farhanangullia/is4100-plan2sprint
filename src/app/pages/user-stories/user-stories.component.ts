import { Component, OnInit } from '@angular/core';
import * as project1Data from '../../../data/project1_onesprint.json'

@Component({
  selector: 'app-user-stories',
  templateUrl: './user-stories.component.html',
  styleUrls: ['./user-stories.component.css']
})
export class UserStoriesComponent implements OnInit {

  userStories: any[];

  targetUserstories: any[];

  constructor() { }

  ngOnInit() {
    console.log(<any>project1Data.title);
    this.userStories = project1Data.sprints[0].userStories;
    console.log(this.userStories);
    this.targetUserstories = [];
  }

}
