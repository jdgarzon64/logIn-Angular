import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiguraComponent } from './figura/figura.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
  ],
  declarations: [DashboardComponent, FiguraComponent],
  exports: [DashboardComponent]
})
export class FiguraModule { }
