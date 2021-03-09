import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// containers
import {CoursesComponent} from './courses.component';
import {CoursesListComponent} from './containers/courses-list/courses-list.component';
// import { PropertiesAddComponent } from './containers/properties-add/properties-add.component';
// import { PropertiesDetailsComponent } from './containers/properties-details/properties-details.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    children: [
      { path: '', component: CoursesListComponent },
   //   { path: 'adicionar', component: PropertiesAddComponent },
   //    { path: ':courseId', component: PropertiesDetailsComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
