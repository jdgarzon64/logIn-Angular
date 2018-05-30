import { DashboardComponent } from './figuras/dashboard/dashboard.component';

import { RegistroComponent } from './registro/registro/registro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'inicio', component: LoginComponent },
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent },
  { path: 'main', component: DashboardComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
