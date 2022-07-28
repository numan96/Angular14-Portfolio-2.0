import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ToolbarModule } from 'primeng/toolbar';
@NgModule({
  imports: [CommonModule, MenuModule, MenubarModule, ToolbarModule],
  declarations: [MenuComponent],
  exports: [MenuComponent],
})
export class SharedModule {}
