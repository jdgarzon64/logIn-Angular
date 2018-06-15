import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiguraComponent } from './figura/figura.component';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginatorComponent } from '../figuras/pagination/paginator/paginator.component';


@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatPaginatorModule
  ],
  declarations: [DashboardComponent, FiguraComponent, PaginatorComponent],
  exports: [DashboardComponent]
})
export class FiguraModule { }
