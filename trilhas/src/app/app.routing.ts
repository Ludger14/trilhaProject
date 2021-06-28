import { HomeComponent } from './componentes/home/home.component';
import { CrudComponent } from './componentes/crud/crud.component';
import { EditCrudComponent } from './componentes/edit-crud/edit-crud.component';
import { PasseioComponent } from './componentes/passeio/passeio.component';
import { ListarPasseioComponent } from './componentes/listar-passeio/listar-passeio.component';
import { EditarPasseioComponent } from './componentes/editar-passeio/editar-passeio.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'crud', component: CrudComponent },
    { path: 'crud/update/:id', component: EditCrudComponent },
    { path: 'crud/adicionar-passeio', component: PasseioComponent },
    { path: 'crud/listar-passeio', component: ListarPasseioComponent },
    { path: 'crud/listar-passeio/editar-passeio/:id', component: EditarPasseioComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);