import { Component, OnInit } from '@angular/core';
import { PaginationService } from '../../servicios/paginator/pagination.service';
import { Subscription } from 'rxjs/Subscription';
import { Figura } from '../../modelo/Figura';
import { PageEvent, MatDialogConfig } from '@angular/material';
import { MatPaginatorIntl } from '@angular/material';
import { CollectedPopUpComponent } from '../collected-pop-up/collected-pop-up.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-figura',
  templateUrl: './figura.component.html',
  styleUrls: ['./figura.component.css']
})
export class FiguraComponent implements OnInit {
  url: string;
  figuras: Figura[];
  figurasSubscription$: Subscription;

  length = 30;
  pageSize = 6;
  pageSizeOptions = [6];
  paginatorIntl = new MatPaginatorIntl();
  pageEvent: PageEvent;
  IMAGE_ALREADY_COLLECTED_CLASS = 'fullColorImage';
  IMAGE_UNCOLLECTED = 'greyImage';

  constructor(private paginationService: PaginationService, public dialog: MatDialog) { }
  // imagen: Image;

  ngOnInit(): void {
    this.metodo(0);
    // this.figuras = this.paginationService.getPagina(5);
    console.log(this.figuras);
    console.log(this.paginationService.getPagina(5));
  }

  getFiguras() {
    this.figurasSubscription$ = this.paginationService
      .getFiguras()
      .subscribe((result: Figura[]) => {
        this.figuras = result;
      });
  }

  //  getFigura(url: String) {
  //   this.imagen:
  // }
  metodo(data: any) {
    console.log('^_^', data);
    this.paginationService.getPagina(data + 1).subscribe((x) => {
      this.figuras = [];
      this.figuras = x;
    });
  }

  eventClickOnImage(figura: Figura) {
    console.log(figura.collected);
  }

  isCollectedImage(figura: Figura) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = figura;
    const dialogRef = this.dialog.open(CollectedPopUpComponent, dialogConfig);
    // if (!figura.collected) {
    dialogRef.afterClosed().subscribe(result => {
      if (result && (figura.collected === false)) {
        figura.classImage = this.IMAGE_ALREADY_COLLECTED_CLASS;
        figura.collected = true;
      }
      else if (result && (figura.collected === true)) {

        figura.classImage = this.IMAGE_UNCOLLECTED;
        figura.collected = false;
      }
    });
    /*
        }
         else {
          dialogRef.afterClosed().subscribe(result => {
            if (result) {
              figura.classImage = this.IMAGE_UNCOLLECTED;
              figura.collected = false;
            }
          });
        }
        */
  }
}
