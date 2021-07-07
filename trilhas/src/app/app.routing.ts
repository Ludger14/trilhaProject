import { HomeComponent } from './componentes/home/home.component';
import { CrudComponent } from './componentes/crud/crud.component';
import { EditCrudComponent } from './componentes/edit-crud/edit-crud.component';
import { PasseioComponent } from './componentes/passeio/passeio.component';
import { ListarPasseioComponent } from './componentes/listar-passeio/listar-passeio.component';
import { EditarPasseioComponent } from './componentes/editar-passeio/editar-passeio.component';
import { LoginComponent } from './componentes/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { AuthGuard } from './services/auth.guard';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'crud', component: CrudComponent, canActivate: [AuthGuard] },
    { path: 'crud/update/:id', component: EditCrudComponent, canActivate: [AuthGuard] },
    { path: 'crud/adicionar-passeio', component: PasseioComponent, canActivate: [AuthGuard] },
    { path: 'crud/listar-passeio', component: ListarPasseioComponent, canActivate: [AuthGuard] },
    { path: 'crud/listar-passeio/editar-passeio/:id', component: EditarPasseioComponent, canActivate: [AuthGuard] }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);