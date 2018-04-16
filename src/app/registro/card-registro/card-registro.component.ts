import { Usuario } from './../../modelo/Usuario';
import { NgForm, FormGroup } from '@angular/forms';
import { RegistroService } from './../../servicios/registro.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-card-registro',
  templateUrl: './card-registro.component.html',
  styleUrls: ['./card-registro.component.css']
})
export class CardRegistroComponent implements OnInit {

  usuario: Usuario = new Usuario();
  registroForm: FormGroup;

  constructor(private fb: FormBuilder, private registroService: RegistroService) {
       this.buildForm();
   }

  ngOnInit() {
    this.registroService.getUsuarios();
  }
  buildForm() {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.compose([Validators.required])],
      apellido: ['', Validators.compose([Validators.required])],
      usuario: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }
  onSubmit() {
    console.log(this.registroForm);
    this.registroService.insertUsuario(this.usuario);
  }
}
