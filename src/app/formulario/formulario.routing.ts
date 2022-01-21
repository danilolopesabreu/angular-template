import { Routes } from '@angular/router';
import { FormularioComponent } from './formulario.component';


export const FormularioRoutes: Routes = [{
    path: '',
    children: [{
        path: '',
        component: FormularioComponent
    }]
}];
