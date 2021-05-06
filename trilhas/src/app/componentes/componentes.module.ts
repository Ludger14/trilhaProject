import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { PasseioComponent } from './passeio/passeio.component';
import { ContatoComponent } from './contato/contato.component';
import { CrudComponent } from './crud/crud.component';


@NgModule({
  declarations: [
    MenuComponent,
    HomeComponent,
    PasseioComponent,
    ContatoComponent,
    CrudComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent,
    HomeComponent,
    PasseioComponent,
    ContatoComponent,
    CrudComponent,
  ]
})
export class ComponentesModule { }
