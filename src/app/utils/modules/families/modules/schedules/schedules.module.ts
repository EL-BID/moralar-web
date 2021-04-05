import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulesRoutingModule } from './schedules-routing.module';

// containers
import { SchedulesComponent } from './schedules.component';

// components

import { ReactiveFormsModule } from '@angular/forms';
import { MegaleiosFormsModule } from 'src/app/utils/modules/megaleios-forms/megaleios-forms.module';
import { SharedModule } from 'src/app/utils/modules/shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';
import Timeline = gsap.core.Timeline;
import {NgbAccordionModule, NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeTestingModule} from '@fortawesome/angular-fontawesome/testing';
import {SchedulesListComponent} from './containers/schedules-list/schedules-list.component';
import {ScheduleListComponent} from './components/schedule-list/schedule-list.component';
import {FamiliesModule} from '../../families.module';
import {PropertiesModule} from '../../../properties/properties.module';

@NgModule({
  declarations: [
    // containers
    SchedulesComponent,
    SchedulesListComponent,
    // components
    ScheduleListComponent
  ],
  exports: [
    SchedulesListComponent
  ],
  imports: [
    CommonModule,
    SchedulesRoutingModule,
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
export class SchedulesModule { }
