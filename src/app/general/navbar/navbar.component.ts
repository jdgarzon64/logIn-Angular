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

  constructor(private router: Router) {
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
