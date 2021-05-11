import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CrudComponent } from './crud/crud.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [    
    HomeComponent,    
    CrudComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ModalModule        
  ],
  exports: [    
    HomeComponent,    
    CrudComponent,
  ]
})
export class ComponentesModule { }
