import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from "./material.module";
import { HomeComponent } from './pages/home/home.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { AppComponent } from './app.component';
import { Browser } from 'protractor';
import { UserStoriesComponent } from './pages/user-stories/user-stories.component';
import { TaskTableComponent } from './shared/task-table/task-table.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PickListModule } from 'primeng/picklist';
import { DataGridModule, DataGrid } from 'primeng/datagrid';
import { DialogModule } from 'primeng/dialog';
import { DataViewModule } from 'primeng/dataview';
import { PanelModule } from 'primeng/primeng';
import { TabViewModule } from 'primeng/primeng';
import { CodeHighlighterModule } from 'primeng/primeng';
import { CheckboxModule } from 'primeng/primeng';
import { ToggleButtonModule } from 'primeng/primeng';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { PastSprintsComponent } from './pages/past-sprints/past-sprints.component';
import { CurrentSprintComponent } from './pages/current-sprint/current-sprint.component';
import { TreeModule } from 'primeng/tree';
import { TreeDragDropService } from 'primeng/components/common/api';
import { TableModule } from 'primeng/table';
import { DataTableModule } from 'primeng/datatable';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressBarModule } from 'primeng/progressbar';




@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    UserStoriesComponent,
    TaskTableComponent,
    PastSprintsComponent,
    CurrentSprintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    CommonModule,
    PickListModule,
    TabViewModule,
    CodeHighlighterModule,
    DataGridModule,
    PanelModule,
    DialogModule,
    DataViewModule,
    CheckboxModule,
    ToggleButtonModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    ToastModule,
    TreeModule,
    TableModule,
    DataTableModule,
    PaginatorModule,
    DataViewModule,
    ProgressBarModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
