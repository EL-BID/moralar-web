import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// containers
import { MatchsComponent } from './matchs.component';
import { MatchsListComponent } from './containers/matchs-list/matchs-list.component';
import { MatchsDetailsComponent } from './containers/matchs-details/matchs-details.component';

const routes: Routes = [
  {
    path: '',
    component: MatchsComponent,
    children: [
      { path: '', component: MatchsListComponent },
      { path: ':residencialPropertyId', component: MatchsDetailsComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchsRoutingModule { }
