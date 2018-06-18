import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiguraComponent } from './figura/figura.component';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatPaginatorModule
  ],
  declarations: [DashboardComponent, FiguraComponent],
  exports: [DashboardComponent]
})
export class FiguraModule { }
