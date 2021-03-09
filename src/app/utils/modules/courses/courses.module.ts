import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoursesComponent} from './courses.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MegaleiosFormsModule} from '../megaleios-forms/megaleios-forms.module';
import {SharedModule} from '../shared/shared.module';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import {CoursesRoutingModule} from './courses-routing.module';
import {CoursesListComponent} from './containers/courses-list/courses-list.component';
import {CourseListSearchComponent} from './components/course-list-search/course-list-search.component';
import {CourseListComponent} from './components/course-list/course-list.component';

@NgModule({
  declarations: [
    CoursesComponent,
    // containers
    CoursesListComponent,
    // components
    CourseListComponent,
    CourseListSearchComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    // modules
    ReactiveFormsModule,
    MegaleiosFormsModule,
    SharedModule,
    CurrencyMaskModule
  ]
})
export class CoursesModule { }
