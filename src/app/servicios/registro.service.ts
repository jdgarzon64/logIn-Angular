import { Usuario } from './../modelo/Usuario';
import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';



@Injectable()
export class RegistroService {
  usuariosList: AngularFireList<any>;
  lista: Observable<any[]>;
  usuario: Usuario = null;


  listaUsuarios: Array<Usuario> = [
    new Usuario('Juan David', 'Garzon', 'user', '1234'),
    new Usuario('Carlos', 'Torres', 'cj', '1234'),
    new Usuario('Maria', 'Rojas', 'mr', '1234')
  ];

  constructor(private firebase: AngularFireDatabase) {

  }



  getUsuarios() {
    return this.usuariosList = this.firebase.list('usuarios');
  }


  insertUsuario(usuario: Usuario) {
    this.usuariosList.push({
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      usuario: usuario.usuario,
      password: usuario.password
    });
  }

  getUsuario(user: string, pass: string) {
    /*
    this.usuario = this.firebase.object('/usuarios/' + usuario).valueChanges();
    console.log(this.usuario);
    return this.usuario;
    */
    // this.usuariosList = this.firebase.list<Usuario>(`usuarios/${this.usuario.usuario}` ).valueChanges();
  }

  logIn(userName: string, userPassword: string) {
    for (let i = 0; i < this.listaUsuarios.length; i++) {
      if (this.listaUsuarios[i].usuario === userName && this.listaUsuarios[i].password === userPassword) {
        this.usuario = this.listaUsuarios[i];
        return true;
      }
    }
    return false;
  }

}
