import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';

export const AppRoutes: Routes = [{
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },{
        path: '',
        component: AdminLayoutComponent,
        children: [{
            path: '',
            loadChildren: './dashboard/dashboard.module#DashboardModule'
        },{
            path: 'components',
            loadChildren: './components/components.module#ComponentsModule'
        },{
            path: 'forms',
            loadChildren: './forms/forms.module#Forms'
        },{
            path: 'tables',
            loadChildren: './tables/tables.module#TablesModule'
        }]
    }
];
