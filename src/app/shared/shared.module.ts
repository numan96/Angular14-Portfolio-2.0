import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ToolbarModule } from 'primeng/toolbar';
import { HomepageNavButtonsComponent } from './homepage-nav-buttons/homepage-nav-buttons.component';
import { ButtonModule } from 'primeng/button';
@NgModule({
  imports: [
    CommonModule,
    MenuModule,
    MenubarModule,
    ToolbarModule,
    ButtonModule,
  ],
  declarations: [MenuComponent, HomepageNavButtonsComponent],
  exports: [MenuComponent, HomepageNavButtonsComponent],
})
export class SharedModule {}
