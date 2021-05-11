import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CrudComponent } from './crud/crud.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EditCrudComponent } from './edit-crud/edit-crud.component';
import { routing } from '../app.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [    
    HomeComponent,    
    CrudComponent,
    EditCrudComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ModalModule,
    routing,  
    RouterModule,      
  ],
  exports: [    
    HomeComponent,    
    CrudComponent,
    EditCrudComponent,
  ]
})
export class ComponentesModule { }
