import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { MatPaginatorIntl } from '@angular/material';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  length = 28;
  pageSize = 3;
  pageSizeOptions = [3, 6, 9, 12];
  paginatorIntl = new MatPaginatorIntl();
  pageEvent: PageEvent;

  ngOnInit(): void {
    this.paginatorIntl.itemsPerPageLabel = 'Items por pagina:';
  }

}
