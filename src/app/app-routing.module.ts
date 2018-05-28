import { FiguraComponent } from './figuras/figura/figura.component';
import { ImagenComponent } from './inicio/imagen/imagen.component';
import { RegistroComponent } from './registro/registro/registro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';


const routes: Routes = [
  { path: '', component: ImagenComponent},
  { path: 'inicio', component: ImagenComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent },
  { path: 'main', component: FiguraComponent }
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
