import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// containers
import { TimelinesComponent } from './timelines.component';
import { TimelinesListComponent } from './containers/timelines-list/timelines-list.component';

const routes: Routes = [
  {
    path: '',
    component: TimelinesComponent,
    children: [
      { path: '', component: TimelinesListComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimelinesRoutingModule { }
