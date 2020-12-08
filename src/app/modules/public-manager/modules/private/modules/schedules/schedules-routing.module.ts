import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// containers
import { SchedulesComponent } from './schedules.component';
import { SchedulesListComponent } from './containers/schedules-list/schedules-list.component';
import { SchedulesAddComponent } from './containers/schedules-add/schedules-add.component';

const routes: Routes = [
  {
    path: '',
    component: SchedulesComponent,
    children: [
      { path: '', component: SchedulesListComponent },
      { path: 'adicionar', component: SchedulesAddComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchedulesRoutingModule { }
