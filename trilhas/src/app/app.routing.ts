import { HomeComponent } from './componentes/home/home.component';
import { CrudComponent } from './componentes/crud/crud.component';
import { EditCrudComponent } from './componentes/edit-crud/edit-crud.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'crud', component: CrudComponent },
    { path: 'update/:id', component: EditCrudComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);