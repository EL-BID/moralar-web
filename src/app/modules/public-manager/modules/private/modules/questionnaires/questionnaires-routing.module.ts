import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// containers
import { QuestionnairesAddComponent } from './containers/questionnaires-add/questionnaires-add.component';
import { QuestionnairesListComponent } from './containers/questionnaires-list/questionnaires-list.component';
import { QuestionnairesComponent } from './questionnaires.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionnairesComponent,
    children: [
      { path: '', component: QuestionnairesListComponent },
      { path: 'adicionar', component: QuestionnairesAddComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionnairesRoutingModule { }
