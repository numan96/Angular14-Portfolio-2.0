import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';

import { CardModule } from 'primeng/card';
import { HomepageNavButtonsComponent } from './homepage-nav-buttons/homepage-nav-buttons.component';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';
@NgModule({
  imports: [
    CommonModule,
    MenuModule,
    MenubarModule,
    ToolbarModule,
    ButtonModule,
    CardModule,
    ChipModule,
  ],
  declarations: [
    MenuComponent,
    HomepageNavButtonsComponent,
    PortfolioItemComponent,
  ],
  exports: [MenuComponent, HomepageNavButtonsComponent, PortfolioItemComponent],
})
export class SharedModule {}
