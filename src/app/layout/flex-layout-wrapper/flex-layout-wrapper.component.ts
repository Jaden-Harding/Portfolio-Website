import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, animation } from '@angular/animations';

@Component({
  selector: 'app-flex-layout-wrapper',
  templateUrl: './flex-layout-wrapper.component.html',
  styleUrls: ['./flex-layout-wrapper.component.scss'],
  animations: [
    trigger('appearState', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', animate('1ms ease-out')),
      transition('hide => show', animate('1500ms ease-in'))
    ])
  ]
})
export class FlexLayoutWrapperComponent implements OnInit {

  show: boolean = false;

  constructor() { 
    this.toggle();
  }

  ngOnInit(): void {
  }

  get stateName() {
    return this.show ? 'show' : 'hide'
  }

  toggle() {
    this.show = false;
    setTimeout(() => {
      this.show = true;
    },200);

  }

}
