import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { HomepageNavButtonsComponent } from './homepage-nav-buttons/homepage-nav-buttons.component';
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
