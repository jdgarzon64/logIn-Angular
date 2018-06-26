import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  jetImage: string;
  mainPageImage: string;
  logInImage: string;
  signUpImage: string;
  albumImage: string;
  logOutImage: string;
  constructor(private router: Router) {
    this.jetImage = '../../../assets/imagenes/jet-logo.png';
    this.mainPageImage = '../../../assets/imagenes/inicio.png';
    this.logInImage = '../../../assets/imagenes/loguearse.png';
    this.signUpImage = '../../../assets/imagenes/registrarse.png';
    this.albumImage = '../../../assets/imagenes/album.png';
    this.logOutImage = '../../../assets/imagenes/salir.png';
  }

  ngOnInit() {
  }
  canShowNavBarResponsive(): Observable<boolean> {
    const isSessionActive = this.router.isActive('login', false) || this.router.isActive('registro', false)
      || this.router.isActive('inicio', false);
    return Observable.of(isSessionActive);
  }

  logOutRequest() {
    localStorage.clear();
  }
}
