import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulesRoutingModule } from './schedules-routing.module';

// modules
import { ReactiveFormsModule } from '@angular/forms';
import { MegaleiosFormsModule } from 'src/app/utils/modules/megaleios-forms/megaleios-forms.module';
import { SharedModule } from 'src/app/utils/modules/shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';

// containers
import { SchedulesComponent } from './schedules.component';
import { SchedulesListComponent } from './containers/schedules-list/schedules-list.component';
import { SchedulesAddComponent } from './containers/schedules-add/schedules-add.component';
import { SchedulesDetailsComponent } from './containers/schedules-details/schedules-details.component';

// components
import { ScheduleListComponent } from './components/schedule-list/schedule-list.component';
import { ScheduleListSearchComponent } from './components/schedule-list-search/schedule-list-search.component';
import { ScheduleFormComponent } from './components/schedule-form/schedule-form.component';
import { ScheduleViewComponent } from './components/schedule-view/schedule-view.component';
import { RescheduleFormComponent } from './components/reschedule-form/reschedule-form.component';

@NgModule({
  declarations: [
    // containers
    SchedulesComponent,
    SchedulesListComponent,
    SchedulesAddComponent,
    // components
    ScheduleListComponent,
    ScheduleListSearchComponent,
    ScheduleFormComponent,
    SchedulesDetailsComponent,
    ScheduleViewComponent,
    RescheduleFormComponent
  ],
  imports: [
    CommonModule,
    SchedulesRoutingModule,
    // modules
    ReactiveFormsModule,
    MegaleiosFormsModule,
    SharedModule,
    NgxMaskModule.forChild()
  ]
})
export class SchedulesModule { }
