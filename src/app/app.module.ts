import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutWrapperComponent } from './layout/flex-layout-wrapper/flex-layout-wrapper.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GithubProjectsComponent } from './github-projects/github-projects.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { EducationComponent } from './education/education.component';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import { PersonalComponent } from './personal/personal.component';
import { LoadSpinnerComponent } from './load-spinner/load-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    FlexLayoutWrapperComponent,
    LandingPageComponent,
    SidenavComponent,
    GithubProjectsComponent,
    EducationComponent,
    PersonalComponent,
    LoadSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatExpansionModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
