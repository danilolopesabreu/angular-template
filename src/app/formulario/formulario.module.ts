import { FormularioComponent } from './formulario.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormularioRoutes } from './formulario.routing';
import { FormsModule } from '@angular/forms';
import { TreeModule } from '@circlon/angular-tree-component';



@NgModule({
  declarations: [FormularioComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(FormularioRoutes),
    FormsModule,
    TreeModule
  ],
  exports:[FormularioComponent]
})
export class FormularioModule { }
