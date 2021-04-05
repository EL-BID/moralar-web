import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from './courses-routing.module';

// containers
import { CoursesComponent } from './courses.component';
import {CoursesListComponent} from './containers/courses-list/courses-list.component';
// components
import {CourseListComponent} from './components/course-list/course-list.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MegaleiosFormsModule } from 'src/app/utils/modules/megaleios-forms/megaleios-forms.module';
import { SharedModule } from 'src/app/utils/modules/shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';
import Timeline = gsap.core.Timeline;
import {NgbAccordionModule, NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeTestingModule} from '@fortawesome/angular-fontawesome/testing';
import {FamiliesModule} from '../../families.module';
import {PropertiesModule} from '../../../properties/properties.module';


@NgModule({
  declarations: [
    // containers
    CoursesComponent,
    CoursesListComponent,
    // components
    CourseListComponent
  ],
  exports: [
    CoursesListComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    // modules
    NgbDropdownModule,
    ReactiveFormsModule,
    MegaleiosFormsModule,
    SharedModule,
    NgxMaskModule.forChild(),
    NgbAccordionModule,
    FontAwesomeTestingModule,
    FamiliesModule,
    PropertiesModule
  ]
})
export class CoursesModule { }
