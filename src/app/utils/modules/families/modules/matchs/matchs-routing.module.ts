import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// containers
import { MatchsComponent } from './matchs.component';

const routes: Routes = [
  {
    path: '',
    component: MatchsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchsRoutingModule { }
