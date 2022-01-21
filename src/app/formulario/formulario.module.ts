import { FormularioComponent } from './formulario.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormularioRoutes } from './formulario.routing';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [FormularioComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(FormularioRoutes),
    FormsModule
  ],
  exports:[FormularioComponent]
})
export class FormularioModule { }
