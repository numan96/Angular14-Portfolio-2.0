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
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioService } from './services/portfolioService.service';
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
  providers: [PortfolioService],
})
export class CoreModule {}
