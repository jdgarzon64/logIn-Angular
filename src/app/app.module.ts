import { environment } from './../environments/environment';
import { LoginModule } from './login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { InicioModule } from './inicio/inicio.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './general/navbar/navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { RegistroModule } from './registro/registro.module';
import { RegistroService } from './servicios/registro.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './servicios/login/login.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    LoginModule,
    InicioModule,
    BrowserAnimationsModule,
    RegistroModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RegistroService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
