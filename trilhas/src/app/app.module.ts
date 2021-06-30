import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentesModule } from './componentes/componentes.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
//import { AgePipe } from 'age-pipe';



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
    Ng2SearchPipeModule,     
    Ng2OrderModule,
    NgxPaginationModule, 
         
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
