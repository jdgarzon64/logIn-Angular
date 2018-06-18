import { Component, OnInit } from '@angular/core';
import { PaginationService } from '../../servicios/paginator/pagination.service';
import { Subscription } from 'rxjs/Subscription';
import { Figura } from '../../modelo/Figura';
import { PageEvent } from '@angular/material';
import { MatPaginatorIntl } from '@angular/material';
import { MatPaginator } from '@angular/material';


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

  constructor(private paginationService: PaginationService) { }
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
}
