import { Usuario } from './../modelo/Usuario';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class RegistroService {
  usuariosList: AngularFireList<any>;
  listaUsuarios = new Array(Usuario);
  constructor(private firebase: AngularFireDatabase) { }
  
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

  getUsuario(usuario: string, password: string) {

  }
}
