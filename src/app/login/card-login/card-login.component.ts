import { Usuario } from './../../modelo/Usuario';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from './../../servicios/login/login.service';
import { NgForm, FormGroup, FormGroupDirective } from '@angular/forms';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Subscription } from 'rxjs/Subscription';
import { isNullOrUndefined } from 'util';


@Component({
  selector: 'app-card-login',
  templateUrl: './card-login.component.html',
  styleUrls: ['./card-login.component.css']
})
export class CardLoginComponent implements OnInit {
  // usuario: Usuario = new Usuario('', '', '', '');
  usuario: Usuario = new Usuario();
  matcher = new MyErrorStateMatcher();
  logInForm: FormGroup;
  usuarios: Usuario[];
  usuarioSubscription$: Subscription;

  constructor(private fb: FormBuilder,
    private loginService: LoginService) {
    this.buildForm();

  }
  buildForm() {
    this.logInForm = this.fb.group({
      usuario: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
  }
  ngOnInit(): void {
    this.getUsers();
  }
  onSubmit() {
   if(this.userValid())
    console.log('entra');
   
  }

  userValid() {
    return !isNullOrUndefined(this.usuarios.filter(
        (user: Usuario) => this.usuario.password === user.password && this.usuario.usuario === user.usuario
    )[0]);

  }

  getUsers() {
    this.usuarioSubscription$ = this.loginService
      .getUsuarios()
      .subscribe((result: Usuario[]) => {
        this.usuarios = result;
      });
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
