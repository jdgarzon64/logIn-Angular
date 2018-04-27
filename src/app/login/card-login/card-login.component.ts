import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../servicios/registro.service';
import { NgForm, FormGroup, FormGroupDirective } from '@angular/forms';
import {FormBuilder, Validators, FormControl} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { Usuario } from '../../modelo/Usuario';


@Component({
  selector: 'app-card-login',
  templateUrl: './card-login.component.html',
  styleUrls: ['./card-login.component.css']
})
export class CardLoginComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  usuario: Usuario = new Usuario('', '', '', '');
  logInForm: FormGroup;
  constructor(private fb: FormBuilder, private registroService: RegistroService) {
    this.buildForm();
   }
   buildForm() {
    this.logInForm = this.fb.group({
      usuario: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
  }
  ngOnInit() {
    this.registroService.getUsuarios();
  }
  onSubmit() {
    console.log('Hola');
    console.log(this.registroService.logIn(this.usuario.usuario, this.usuario.password));
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
