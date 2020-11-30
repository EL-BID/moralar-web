import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// containers
import { UsersListComponent } from './containers/users-list/users-list.component';

const routes: Routes = [
  {
    path: '',
    component: UsersListComponent,
    children: [
      { path: '', component: UsersListComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
