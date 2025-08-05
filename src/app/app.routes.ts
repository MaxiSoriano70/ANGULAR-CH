import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { Error404Component } from './error404/error404.component';
import { RoutePaths } from './shared/routes';

export const routes: Routes = [
    {
        path: RoutePaths.HOME,
        component: HomeComponent
    },
    {
        path: RoutePaths.USUARIOS,
        component: UsuarioComponent
    },
    {
        path: `${RoutePaths.USUARIOS}/:id`,
        component: UsuarioComponent
    },
    {
        path: '**',
        component: Error404Component
    }
];
