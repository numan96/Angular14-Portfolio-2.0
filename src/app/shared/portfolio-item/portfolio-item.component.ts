import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/core/services/portfolioService.service';
import { Project } from './project.model';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.css'],
})
export class PortfolioItemComponent implements OnInit {
  projects: Project[] = [];

  constructor(private _portfolioService: PortfolioService) {}

  ngOnInit() {
    this.projects = this._portfolioService.getProjects();
  }
}
