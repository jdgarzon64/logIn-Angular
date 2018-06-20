import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StickerComponent } from './figura/sticker.component';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { CollectedPopUpComponent } from './collected-pop-up/collected-pop-up.component';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  declarations: [DashboardComponent, StickerComponent, CollectedPopUpComponent],
  exports: [DashboardComponent],
  entryComponents: [CollectedPopUpComponent]
})
export class FiguraModule { }
