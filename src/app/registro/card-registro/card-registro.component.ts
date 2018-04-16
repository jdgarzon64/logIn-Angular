import { Usuario } from './../../modelo/Usuario';
import { NgForm } from '@angular/forms';
import { RegistroService } from './../../servicios/registro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-registro',
  templateUrl: './card-registro.component.html',
  styleUrls: ['./card-registro.component.css']
})
export class CardRegistroComponent implements OnInit {
  usuario: Usuario = new Usuario();
  constructor(private registroService: RegistroService) { }

  ngOnInit() {
    this.registroService.getUsuarios();
  }

  onSubmit() {
    console.log(this.usuario);
    this.registroService.insertUsuario(this.usuario);
  }
}
