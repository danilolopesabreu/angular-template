import { PrincipalComponent } from './principal/principal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: PrincipalComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'componentes',
        loadChildren: () => import('./modules/components/components.module').then(m => m.ComponentsModule)
      },
      {
        path: 'tabelas',
        loadChildren: () => import('./modules/tables/tables.module').then(m => m.TablesModule)
      },
      {
        path: 'formularios',
        loadChildren: () => import('./modules/forms/forms.module').then(m => m.Forms)
      }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
