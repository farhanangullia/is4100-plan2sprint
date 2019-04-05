import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-past-sprints',
  templateUrl: './past-sprints.component.html',
  styleUrls: ['./past-sprints.component.css']
})
export class PastSprintsComponent implements OnInit {


  userStories: any[];

  sprints: any[];

  cols: any[];

  selectedUserStory: any;

  dialogVisible: boolean;

  currentProject: any;

  displayDialog: boolean;

  sortOptions: SelectItem[];

  sprintOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;

  checked: boolean = false;

  sprintNum: any;

  projectId: any;


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(
      params => {
        this.projectId = params.projectId;
        this.currentProject = JSON.parse(localStorage.getItem(this.projectId));
        //this.userStories = this.currentProject.default.sprints[0].userStories;
        console.log(this.userStories);
        this.sprints = this.currentProject.default.sprints;

        console.log('sprints', this.sprints);

        this.sortOptions = [
          // { label: 'Newest First', value: '!supportTicketId' },
          // { label: 'Oldest First', value: 'supportTicketId' },
          { label: 'Priority Level', value: 'userStory.priority' }
        ];




        this.cols = [
          { field: 'details', header: 'User Story' },
          { field: 'priority', header: 'Priority' },
          { field: 'numTasks', header: 'No. of Tasks' }
        ];


        // this.filesTree11.push({ 'priority': this.newStoryPriorityLevel, 'details': this.newStoryDetails });

        // var newProject = {
        //   default: {
        //     "projectId": (localStorage.length + 1).toString(),
        //     "title": title,
        //     "description": description,
        //     "availableUserStories": [],
        //     "sprints": [
        //       {
        //         "sprintNum": 1,
        //         "userStories": []
        //       }
        //     ]
        //   }

        // }
        // this.userStories.push({ 'priority': this.newStoryPriorityLevel, 'details': this.newStoryDetails });

        // this.currentProject.default.availableUserStories.push({ 'priority': this.newStoryPriorityLevel, 'details': this.newStoryDetails, 'tasks': [] });


        // this.filesTree11 = <TreeNode[]>JSON.parse(localStorage.getItem('1'));
        console.log('tree', JSON.parse(localStorage.getItem('1')));
      }
    )


  }

  showUserStory(userStory: any) {
    this.selectedUserStory = userStory;
    this.dialogVisible = true;
  }


  selectUserStory(event: Event, userStory: any) {
    this.selectedUserStory = userStory;
    this.displayDialog = true;
    event.preventDefault();
  }

  onDialogHide() {
    this.selectedUserStory = null;
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  onSprintChange(event) {
    console.log(this.sprintNum);
    this.userStories = null;
    this.userStories = this.currentProject.default.sprints[this.sprintNum - 1].userStories;


  }
}
