import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from './../modelo/Usuario';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

@Injectable()
export class RegistroService {


  constructor(private http: HttpClient) {

  }



}
