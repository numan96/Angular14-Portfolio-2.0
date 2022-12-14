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
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { GMapModule } from 'primeng/gmap';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { GalleriaModule } from 'primeng/galleria';
import { TimelineModule } from 'primeng/timeline';
import { TabViewModule } from 'primeng/tabview';
import { ChipModule } from 'primeng/chip';
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioService } from './services/portfolioService.service';
import { NotFoundComponent } from './not-found/not-found.component';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    ImageModule,
    AccordionModule,
    PdfViewerModule,
    CheckboxModule,
    InputTextModule,
    ButtonModule,
    InputTextareaModule,
    ToastModule,
    GMapModule,
    TooltipModule,
    GalleriaModule,
    TabViewModule,
    ProgressBarModule,
    ChipModule,
    TimelineModule,
    CardModule,
  ],
  declarations: [
    AboutMeComponent,
    ContactComponent,
    PortfolioComponent,
    PortfolioDetailComponent,
    ResumeComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  exports: [
    AboutMeComponent,
    ContactComponent,
    PortfolioComponent,
    PortfolioDetailComponent,
    ResumeComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  providers: [PortfolioService],
})
export class CoreModule {}
