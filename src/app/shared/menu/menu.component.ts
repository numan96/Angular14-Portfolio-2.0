import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: 'About Me',
        icon: 'pi pi-fw pi-info',
        routerLink: '/about-me',
      },
      {
        label: 'Portfolio',
        icon: 'pi pi-fw pi-code',
        routerLink: '/portfolio',
      },
      {
        label: 'Resume',
        icon: 'pi pi-fw pi-briefcase',
        routerLink: '/resume',
      },
      {
        label: 'Contact',
        icon: 'pi pi-fw pi-map-marker',
        routerLink: '/contact',
      },
    ];
  }
}
