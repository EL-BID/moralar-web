import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertiesComponent } from 'src/app/utils/modules/properties/properties.component';

const routes: Routes = [
  {
    path: '',
    component: PropertiesComponent,
    children: [
      {
        path: 'lista-matchs',
        loadChildren: () => import('./modules/matchs/matchs.module').then(m => m.MatchsModule)
      },
      {
        path: '',
        loadChildren: () => import('src/app/utils/modules/properties/properties.module').then(m => m.PropertiesModule)
      },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertiesRoutingModule { }
