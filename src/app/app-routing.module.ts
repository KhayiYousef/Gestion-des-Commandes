import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommandesComponent } from './commandes/commandes.component';

const routes: Routes = [
  {path:'commande',component:CommandesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
