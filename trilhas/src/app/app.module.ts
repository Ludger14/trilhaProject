import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentesModule } from './componentes/componentes.module';





@NgModule({
  declarations: [
    AppComponent,                       
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentesModule,
    routing,
    HttpClientModule,        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
