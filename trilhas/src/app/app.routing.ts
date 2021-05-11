import { HomeComponent } from './componentes/home/home.component';
import { CrudComponent } from './componentes/crud/crud.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'crud', component: CrudComponent },
    { path: 'edit/:id', component: CrudComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);