import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardRoutes } from './dashboard.routing';
import { FormsModule } from '@angular/forms';
import { LbdModule } from '../lbd/lbd.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    RouterModule.forChild(DashboardRoutes),
    CommonModule,
    FormsModule,
    LbdModule
  ]
})
export class DashboardModule { }
