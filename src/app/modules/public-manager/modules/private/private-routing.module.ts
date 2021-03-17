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
        path: 'agendamentos',
        loadChildren: () => import('./modules/schedules/schedules.module').then(m => m.SchedulesModule)
      },
      {
        path: 'imoveis',
        loadChildren: () => import('src/app/utils/modules/properties/properties.module').then(m => m.PropertiesModule)
      },
      {
        path: 'matchs',
        loadChildren: () => import('src/app/modules/public-manager/modules/private/modules/properties/modules/matchs/matchs.module').then(m => m.MatchsModule)
      },
      {
        path: 'displacement-maps',
        loadChildren: () => import('src/app/modules/public-manager/modules/private/modules/properties/modules/displacement-maps/displacement-maps.module').then(m => m.DisplacementMapsModule)
      },
      {
        path: 'videos',
        loadChildren: () => import('src/app/modules/public-manager/modules/private/modules/videos/videos.module').then(m => m.VideosModule)
      },
      {
        path: 'questionarios',
        loadChildren: () => import('src/app/utils/modules/questionnaires/questionnaires.module').then(m => m.QuestionnairesModule)
      },
      {
        path: 'enquetes',
        loadChildren: () => import('src/app/utils/modules/polls/polls.module').then(m => m.PollsModule)
      },
      {
        path: 'cursos',
        loadChildren: () => import('src/app/utils/modules/courses/courses.module').then(m => m.CoursesModule)
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
