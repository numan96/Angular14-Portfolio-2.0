import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Credentials } from 'src/app/shared/portfolio-item/credentials.model';
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
  projectCredentials: Credentials = { user: '', password: '' };
  constructor(
    private _route: ActivatedRoute,
    private _portfolioService: PortfolioService,
    private _router: Router
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params) => {
      this.projectId = params['id'];
    });
    this._portfolioService
      .getPortfolioItem(this.projectId)
      .subscribe((project) => {
        console.log(project);

        if (project != undefined) {
          this.project = project;
          this.projectImages.push(project.projectImages);
          this.projectCredentials = {
            user: project.projectCredentials!.user,
            password: project.projectCredentials!.password,
          };
        } else {
          this._router.navigate(['/404']);
        }
      });
  }

  openLiveWebsite() {
    window.open(this.project.projectLink);
  }

  openGithub() {
    window.open(this.project.projectGit);
  }
}
