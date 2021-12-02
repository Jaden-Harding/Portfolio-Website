import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  panelOpenState = false;
  loading = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.doneLoading();
  }

  projects() {
    this.router.navigate(["/projects"]);
  }

  doneLoading() {
    this.loading = false;
  }

}
