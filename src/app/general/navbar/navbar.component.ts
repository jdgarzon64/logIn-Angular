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
  session: boolean;
  isSessionActive: boolean;
  sessionSubscription$: Subscription;
  constructor(private router: Router) {
    // localStorage.setItem('activeSession', 'false');
    this.setSession();
    localStorage.setItem('activeSession', this.isSessionActive + '');
    this.session = (localStorage.getItem('activeSession') === 'true');
  }

  ngOnInit() {
  }
  canShowNavBarResponsive(): Observable<boolean> {
    this.isSessionActive = this.router.isActive('login', false) || this.router.isActive('registro', false);
    return Observable.of(this.isSessionActive);
  }

  setSession() {
    this.sessionSubscription$ = this.canShowNavBarResponsive()
      .subscribe((result) =>
        this.isSessionActive = result);
  }
}
