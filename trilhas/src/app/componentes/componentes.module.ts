import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { CrudComponent } from './crud/crud.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [    
    HomeComponent,    
    CrudComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [    
    HomeComponent,    
    CrudComponent,
  ]
})
export class ComponentesModule { }
