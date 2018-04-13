import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { CardRegistroComponent } from './card-registro/card-registro.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [RegistroComponent, CardRegistroComponent],
  exports: [RegistroComponent]
})
export class RegistroModule { }
