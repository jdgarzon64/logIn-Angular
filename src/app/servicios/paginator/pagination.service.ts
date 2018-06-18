import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { FIGURAS } from '../../../environments/mocks/mock-figuras';
import { Figura } from '../../modelo/Figura';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PaginationService {

  listaFiguras: Figura[];
  paginaActual: any[];
  constructor(private http: HttpClient) {
    this.listaFiguras = FIGURAS;
  }
  arr: any[];
  getFiguras(): Observable<Figura[]> {
    return of(FIGURAS);
  }

  getPagina(index: number): Observable<Figura[]> {
    // return this.listaFiguras.slice(index: number,index: number);
    return of (this.listaFiguras.slice(((index) * 6) - 6 , ((index) * 6)));
  }
}
