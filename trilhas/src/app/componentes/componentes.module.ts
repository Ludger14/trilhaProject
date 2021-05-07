import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { CrudComponent } from './crud/crud.component';


@NgModule({
  declarations: [    
    HomeComponent,    
    CrudComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [    
    HomeComponent,    
    CrudComponent,
  ]
})
export class ComponentesModule { }
