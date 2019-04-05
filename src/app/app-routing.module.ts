import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { HomeComponent } from './pages/home/home.component';
import { FullscreenOverlayContainer } from '@angular/cdk/overlay';
import { UserStoriesComponent } from './pages/user-stories/user-stories.component';
import { PastSprintsComponent } from './pages/past-sprints/past-sprints.component';
import { CurrentSprintComponent } from './pages/current-sprint/current-sprint.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: "",
    component: SidenavComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: ':projectId/userstories', component: UserStoriesComponent },
      { path: 'pastsprints', component: PastSprintsComponent },
      { path: ':projectId/currentsprint', component: CurrentSprintComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
