import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Usuario } from '../../modelo/Usuario';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';
import { USUARIOS } from '../../../environments/mocks/mock-usuarios';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }


  getUsuarios(): Observable<Usuario[]> {
    return of (USUARIOS);
  }
}
