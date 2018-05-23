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


  getUsuarios(): Observable<{}> {

    return this.http.get('http://localhost:62776/api/values/all');
  }


  /*
    insertUsuario(usuario: Usuario) {
      this.usuariosList.push({
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        usuario: usuario.usuario,
        password: usuario.password
      });
    }
  */
  getUsuario(user: string, pass: string) {
    /*
    this.usuario = this.firebase.object('/usuarios/' + usuario).valueChanges();
    console.log(this.usuario);
    return this.usuario;
    */
    // this.usuariosList = this.firebase.list<Usuario>(`usuarios/${this.usuario.usuario}` ).valueChanges();
  }
  /*
    logIn(userName: string, userPassword: string) {
      for (let i = 0; i < this.listaUsuarios.length; i++) {
        if (this.listaUsuarios[i].usuario === userName && this.listaUsuarios[i].password === userPassword) {
          this.usuario = this.listaUsuarios[i];
          return true;
        }
      }
      return false;
    }
    */
}
