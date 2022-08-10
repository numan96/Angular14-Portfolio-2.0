import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioDetailComponent } from './portfolio/portfolio-detail/portfolio-detail.component';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ImageModule } from 'primeng/image';
import { AccordionModule } from 'primeng/accordion';

import { PdfViewerModule } from 'ng2-pdf-viewer';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ImageModule,
    AccordionModule,
    PdfViewerModule,
  ],
  declarations: [
    AboutMeComponent,
    ContactComponent,
    PortfolioComponent,
    PortfolioDetailComponent,
    ResumeComponent,
    HomeComponent,
  ],
  exports: [
    AboutMeComponent,
    ContactComponent,
    PortfolioComponent,
    PortfolioDetailComponent,
    ResumeComponent,
    HomeComponent,
  ],
})
export class CoreModule {}
