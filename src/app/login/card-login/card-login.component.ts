import { Usuario } from './../../modelo/Usuario';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input } from '@angular/core';
import { RegistroService } from '../../servicios/registro.service';
import { NgForm, FormGroup, FormGroupDirective } from '@angular/forms';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';


@Component({
  selector: 'app-card-login',
  templateUrl: './card-login.component.html',
  styleUrls: ['./card-login.component.css']
})
export class CardLoginComponent implements OnInit {
  usuario: Usuario = new Usuario('', '', '', '');
  matcher = new MyErrorStateMatcher();
  logInForm: FormGroup;
  usuarios: any[];
  constructor(private fb: FormBuilder, private registroService: RegistroService) {
    this.buildForm();

  }
  buildForm() {
    this.logInForm = this.fb.group({
      usuario: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
  }
  ngOnInit(): void {
    this.getallusers();
  }
  onSubmit() {
  }

  getallusers() {
    console.log('Hola');
    this.registroService.getUsuarios().subscribe((x: Usuario[]) => {
      this.usuarios = x;
      console.log(x);

    });
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
