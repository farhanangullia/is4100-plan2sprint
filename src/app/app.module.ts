import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from "./material.module";
import { HomeComponent } from './pages/home/home.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { AppComponent } from './app.component';
import { Browser } from 'protractor';
import { UserStoriesComponent } from './pages/user-stories/user-stories.component';
import { TaskTableComponent } from './shared/task-table/task-table.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    UserStoriesComponent,
    TaskTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
