import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { ComponentesModule } from './componentes/componentes.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,       
  ],
  imports: [
    BrowserModule,
    ComponentesModule,
    routing,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
