import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { GithubProjectsComponent } from './github-projects/github-projects.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PersonalComponent } from './personal/personal.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'personal', component: PersonalComponent },
  { path: 'projects', component: GithubProjectsComponent},
  { path: 'education', component: EducationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
