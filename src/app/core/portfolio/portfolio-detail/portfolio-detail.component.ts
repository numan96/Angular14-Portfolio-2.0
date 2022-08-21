import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/shared/portfolio-item/project.model';
import { PortfolioService } from '../../services/portfolioService.service';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.css'],
})
export class PortfolioDetailComponent implements OnInit {
  projectId: any;
  project!: Project;
  projectImages: any[] = [];
  constructor(
    private _route: ActivatedRoute,
    private _portfolioService: PortfolioService
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params) => {
      this.projectId = params['id'];
      this.project = this._portfolioService.getPortfolioItem(this.projectId);
      this.projectImages.push(this.project.projectImages);
    });
  }
}
