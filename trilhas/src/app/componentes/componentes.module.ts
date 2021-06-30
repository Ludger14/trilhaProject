import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CrudComponent } from './crud/crud.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EditCrudComponent } from './edit-crud/edit-crud.component';
import { routing } from '../app.routing';
import { RouterModule } from '@angular/router';
import { PasseioComponent } from './passeio/passeio.component';
import { ListarPasseioComponent } from './listar-passeio/listar-passeio.component';
import { EditarPasseioComponent } from './editar-passeio/editar-passeio.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserFilterPipe } from './crud/user-filter.pipe';


@NgModule({
  declarations: [    
    HomeComponent,    
    CrudComponent,
    EditCrudComponent,
    PasseioComponent,
    ListarPasseioComponent,
    EditarPasseioComponent,
    UserFilterPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ModalModule,
    routing,  
    RouterModule,   
    Ng2SearchPipeModule,     
    Ng2OrderModule,
    NgxPaginationModule, 
  ],
  exports: [    
    HomeComponent,    
    CrudComponent,
    EditCrudComponent,
    PasseioComponent,
    ListarPasseioComponent,
    EditarPasseioComponent,
  ]
})
export class ComponentesModule { }
