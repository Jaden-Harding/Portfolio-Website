import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  panelOpenState = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  projects() {
    this.router.navigate(["/projects"]);
  }

}
