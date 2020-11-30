import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// containers
import { PrivateComponent } from './private.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
      {
        path: 'administrador',
        loadChildren: () => import('./modules/administrator/administrator.module').then(m => m.AdministratorModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'familias',
        loadChildren: () => import('./modules/families/families.module').then(m => m.FamiliesModule)
      },
      {
        path: 'profissionais-tts',
        loadChildren: () => import('./modules/professionals/professionals.module').then(m => m.ProfessionalsModule)
      },
      {
        path: 'usuarios',
        loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'administradores',
        loadChildren: () => import('./modules/administrators/administrators.module').then(m => m.AdministratorsModule)
      },
      {
        path: 'notificacoes',
        loadChildren: () => import('./modules/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
