import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-nav-buttons',
  templateUrl: './homepage-nav-buttons.component.html',
  styleUrls: ['./homepage-nav-buttons.component.css'],
})
export class HomepageNavButtonsComponent implements OnInit {
  @Input() labelName = '';
  constructor() {}

  ngOnInit() {}
}
