import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubProjectsComponent } from './github-projects/github-projects.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'projects', component: GithubProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
