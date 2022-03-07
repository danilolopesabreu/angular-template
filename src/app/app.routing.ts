import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';

export const AppRoutes: Routes = [{
        path: '',
        redirectTo: 'pesquisar-cif',
        pathMatch: 'full',
    },{
        path: '',
        component: AdminLayoutComponent,
        children: [{
            path: '',
            loadChildren: './dashboard/dashboard.module#DashboardModule'
        },{
            path: 'formulario',
            loadChildren: './formulario/formulario.module#FormularioModule'
        }]
    }
];
