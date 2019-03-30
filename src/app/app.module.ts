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
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    UserStoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
