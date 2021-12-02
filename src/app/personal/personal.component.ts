import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  loading = true;

  constructor() { }

  ngOnInit(): void {
    this.doneLoading();
  }

  doneLoading() {
    this.loading= false;
  }

}
