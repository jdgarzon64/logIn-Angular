import { Component, OnInit } from '@angular/core';
import { PaginationService } from '../../servicios/paginator/pagination.service';
import { Subscription } from 'rxjs/Subscription';
import { Figura } from '../../modelo/Figura';

@Component({
  selector: 'app-figura',
  templateUrl: './figura.component.html',
  styleUrls: ['./figura.component.css']
})
export class FiguraComponent implements OnInit {
  url: string;
  figuras: Figura[];
  figurasSubscription$: Subscription;
  constructor(private paginationService: PaginationService) { }
 // imagen: Image;
  ngOnInit(): void {
    this.getFiguras();
    console.log(this.figuras);
    this.url = 'https://cdnmundo1.img.sputniknews.com/images/107788/93/1077889368.jpg';
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
}
