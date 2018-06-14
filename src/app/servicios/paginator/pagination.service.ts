import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { FIGURAS } from '../../../environments/mocks/mock-figuras';
import { Figura } from '../../modelo/Figura';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class PaginationService {

  constructor(private http: HttpClient) { }

  getFiguras(): Observable<Figura[]> {
    return of (FIGURAS);
  }
}
