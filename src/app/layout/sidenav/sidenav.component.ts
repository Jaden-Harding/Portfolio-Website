import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  home() {
    this.router.navigate(['/']);
  }

  gitProjects() {
    this.router.navigate(['/projects']);
  }
  
  education() {
    this.router.navigate(['/education']);
  }

  personal() {
    this.router.navigate(['/personal']);
  }

}
