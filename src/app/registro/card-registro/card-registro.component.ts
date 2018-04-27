import { Usuario } from './../../modelo/Usuario';
import { NgForm, FormGroup, FormGroupDirective } from '@angular/forms';
import { RegistroService } from './../../servicios/registro.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormControl} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-card-registro',
  templateUrl: './card-registro.component.html',
  styleUrls: ['./card-registro.component.css']
})
export class CardRegistroComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  usuario: Usuario = new Usuario('', '', '', '');
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

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}