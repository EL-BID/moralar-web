import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// containers
import { DisplacementMapsComponent } from './displacement-maps.component';
import { DisplacementMapsListComponent } from './containers/displacement-maps-list/displacement-maps-list.component';

const routes: Routes = [
  {
    path: '',
    component: DisplacementMapsComponent,
    children: [
      { path: '', component: DisplacementMapsListComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisplacementMapsRoutingModule { }
