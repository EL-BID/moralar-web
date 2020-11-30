import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'administrador',
    loadChildren: () => import('./modules/administrator/administrator.module').then(m => m.AdministratorModule)
  },
  {
    path: '**',
    redirectTo: 'administrador',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
