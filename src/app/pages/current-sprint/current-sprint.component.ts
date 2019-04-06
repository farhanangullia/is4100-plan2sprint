import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { networkInterfaces } from 'os';

@Component({
  selector: 'app-current-sprint',
  templateUrl: './current-sprint.component.html',
  styleUrls: ['./current-sprint.component.css']
})

export class CurrentSprintComponent implements OnInit {
  displayedColumns: string[] = ['userstories', 'tasks'];
  project: any;
  currentSprint: any;
  currentUserStories: any;
  selectedUserStory: any;
  displayAllTasksDialog: boolean;
  displayAddTaskDialog: boolean;
  displaySetRange: boolean;
  displayEdit: boolean;
  selectedUserStoryTasks: any;
  newTaskName: FormControl;
  createNewTaskForm: FormGroup;
  projectId: any;
  highLowerRange: FormControl;
  highUpperRange: FormControl;
  medLowerRange: FormControl;
  medUpperRange: FormControl;
  lowLowerRange: FormControl;
  lowUpperRange: FormControl;
  createRangeForm: FormGroup;
  ac: FormControl;
  ev: FormControl;
  pv: FormControl;
  editValueForm: FormGroup;


  constructor(
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.createFormControl();
    this.createForm();
    this.createEditValueForm();
    this.route.params.subscribe(
      params => {
        this.projectId = params.projectId;
        this.project = JSON.parse(localStorage.getItem(this.projectId));
        console.log(this.project)
        const latestSprint = this.project.default.sprints.length;
        this.currentSprint = this.project.default.sprints[latestSprint - 1];
        console.log(this.currentSprint);
        this.currentUserStories = this.currentSprint.userStories;
        console.log(this.currentUserStories)
      }
    )
  }

  openEdit(event: Event, task: any) {
    this.displayEdit = true;
    event.preventDefault();
    // this.createEditValueControl(task);
  }
  
  closeEdit() {
    this.displayEdit = false;
  }

  openSetRange(event: Event) {
    this.displaySetRange = true;
    event.preventDefault();
  }

  closeSetRange() {
    this.displaySetRange = false;
  }

  selectUserStory(event: Event, userStory: any) {
    this.selectedUserStory = userStory;
    console.log(this.selectedUserStory);
    this.displayAllTasksDialog = true;
    event.preventDefault();
  }

  closeAllTasks() {
    this.selectedUserStory = null;
    this.displayAllTasksDialog = false;
  }

  openAddTask(event: Event, userStory: any) {
    this.selectedUserStory = userStory;
    this.displayAddTaskDialog = true;
    event.preventDefault();
  }

  closeAddTask() {
    this.selectedUserStory = null;
    this.displayAddTaskDialog = false;
  }

  createEditValueControl() {
    this.ac = new FormControl('', {
      updateOn: 'change'
    });
    this.pv = new FormControl('', {
      updateOn: 'change'
    });
    this.ev = new FormControl('', {
      updateOn: 'change'
    })
  }

  createFormControl() {
    this.newTaskName = new FormControl('', {
      updateOn: 'change'
    })
    this.highLowerRange = new FormControl('', {
      updateOn: 'change'
    })
    this.highUpperRange = new FormControl('', {
      updateOn: 'change'
    })
    this.medLowerRange = new FormControl('', {
      updateOn: 'change'
    })
    this.medUpperRange = new FormControl('', {
      updateOn: 'change'
    })
    this.lowLowerRange = new FormControl('', {
      updateOn: 'change'
    })
    this.lowUpperRange = new FormControl('', {
      updateOn: 'change'
    })
    this.createEditValueControl();
  }

  createForm() {
    this.createNewTaskForm = new FormGroup({
      newTaskName: this.newTaskName,
    });
    this.createRangeForm = new FormGroup({
      highLowerRange: this.highLowerRange,
      highUpperRange: this.highUpperRange,
      medLowerRange: this.medLowerRange,
      medUpperRange: this.medUpperRange,
      lowLowerRange: this.lowLowerRange,
      lowUpperRange: this.lowUpperRange,
    });
  }

  createEditValueForm() {
    this.editValueForm = new FormGroup({
      ac: this.ac,
      ev: this.ev,
      pv: this.pv
    })

  }

  onSubmitNewTask() {
    if (this.createNewTaskForm.valid) {
      const newTaskName = this.createNewTaskForm.value.newTaskName;
      this.createJSONTaskObject(newTaskName, this.selectUserStory);
      this.closeAddTask();
    }
  }

  onSubmitRange() {
    if(this.createNewTaskForm.valid) {
      const highUpperRange = this.createRangeForm.value.highUpperRange;
      const highLowerRange = this.createRangeForm.value.highLowerRange;
      const medUpperRange = this.createRangeForm.value.medUpperRange;
      const medLowerRange = this.createRangeForm.value.medLowerRange;
      const lowUpperRange = this.createRangeForm.value.lowUpperRange;
      const lowLowerRange = this.createRangeForm.value.lowLowerRange;
      this.createJSONRangeObject(highUpperRange, highLowerRange, medUpperRange, medLowerRange, lowUpperRange, lowLowerRange)
    }

  }

  onSaveValue() {
    if(this.editValueForm.valid) {
      console.log(this.editValueForm.value)
    }
  }

  createJSONRangeObject(hu: number, hl: number, mu: number, ml: number, lu: number, ll: number) {
    var range = {
      "range": {
        "higherUpper": hu,
        "higherLower": hl,
        "medUpper": mu,
        "medLower": ml,
        "lowerUpper": lu,
        "lowerLower": ll
      }
    }
    console.log(range);
    this.closeSetRange();
    localStorage.setItem("range", JSON.stringify(range));
  }

  createJSONTaskObject(taskName: any, userStory: any) {
    var newTask = {
      "task": {
        "description": taskName,
        "EV": 0,
        "AC": 0,
        "PV": 0
      }
    }
    const latestSprint = this.project.default.sprints.length;
    const userStoryIndex = this.project.default.sprints[latestSprint - 1].userStories.indexOf(userStory);
    this.project.default.sprints[latestSprint - 1].userStories[userStoryIndex].tasks.push(newTask);
    localStorage.setItem(this.projectId, JSON.stringify(this.project));
  }

}
