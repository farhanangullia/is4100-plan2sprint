import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { HomeComponent } from './pages/home/home.component';
import { FullscreenOverlayContainer } from '@angular/cdk/overlay';
import { UserStoriesComponent } from './pages/user-stories/user-stories.component';

const routes: Routes = [
  {
    path: "",
    component: SidenavComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: ':projectId/userstories', component: UserStoriesComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
