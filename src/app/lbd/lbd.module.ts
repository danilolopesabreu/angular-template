
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LbdTableComponent } from './lbd-table/lbd-table.component';

export interface DropdownLink {
  title: string;
  iconClass?: string;
  routerLink?: string;
}

export enum NavItemType {
  Sidebar = 1, 
  NavbarLeft = 2, 
  NavbarRight = 3 
}

export interface NavItem {
  type: NavItemType;
  title: string;
  routerLink?: string;
  iconClass?: string;
  numNotifications?: number;
  dropdownItems?: (DropdownLink | 'separator')[];
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    LbdTableComponent,
  ],
  exports: [
    LbdTableComponent,
  ]
})
export class LbdModule { }
