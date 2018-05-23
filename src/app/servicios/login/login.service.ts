import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Usuario } from '../../modelo/Usuario';
import 'rxjs/add/operator/map';

const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }




  isValidUser(usuario: Usuario): Observable<{}> {
    console.log(usuario);
   // return this.http.post<Usuario>('http://localhost:62776/api/values/isuservalid', usuario, {headers: headers});
    return this.http.post<Usuario>('UsuarioJson', usuario, {headers: headers});
  }



}
