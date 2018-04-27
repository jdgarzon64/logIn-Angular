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
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { RegistroService } from './servicios/registro.service';
import { AngularFireAuthModule } from 'angularfire2/auth';


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
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [RegistroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
