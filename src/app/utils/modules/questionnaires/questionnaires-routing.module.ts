import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// containers
import { QuestionnairesComponent } from './questionnaires.component';
import { QuestionnairesListComponent } from './containers/questionnaires-list/questionnaires-list.component';
import { QuestionnairesAddComponent } from './containers/questionnaires-add/questionnaires-add.component';
import { QuestionnairesDetailsComponent } from './containers/questionnaires-details/questionnaires-details.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionnairesComponent,
    children: [
      {
        path: 'disponiveis',
        loadChildren: () => import('./modules/availables/availables.module').then(m => m.AvailablesModule)
      },
      { path: '', component: QuestionnairesListComponent },
      { path: 'adicionar', component: QuestionnairesAddComponent },
      { path: ':questionnaireId', component: QuestionnairesDetailsComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionnairesRoutingModule { }
