import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// containers
import {PollsAddComponent} from './containers/polls-add/polls-add.component';
import {PollsDetailsComponent} from './containers/polls-details/polls-details.component';
import {PollsListComponent} from './containers/polls-list/polls-list.component';
import {PollsComponent} from './polls.component';

const routes: Routes = [
  {
    path: '',
    component: PollsComponent
    ,
    children: [
      {
        path: 'disponiveis',
        loadChildren: () => import('./modules/availables/availables.module').then(m => m.AvailablesModule)
      },
      { path: '', component: PollsListComponent },
      { path: 'adicionar', component: PollsAddComponent },
      { path: ':pollId', component: PollsDetailsComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PollsRoutingModule { }
