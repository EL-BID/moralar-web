import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelinesRoutingModule } from './timelines-routing.module';

// containers
import { TimelinesComponent } from './timelines.component';
import { TimelinesListComponent } from './containers/timelines-list/timelines-list.component';

// components
import { TimelineListComponent } from './components/timeline-list/timeline-list.component';
import { TimelineListSearchComponent } from './components/timeline-list-search/timeline-list-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MegaleiosFormsModule } from 'src/app/utils/modules/megaleios-forms/megaleios-forms.module';
import { SharedModule } from 'src/app/utils/modules/shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';
import Timeline = gsap.core.Timeline;
import {TimelinesDetailsComponent} from './containers/timelines-details/timelines-details.component';
import {TimelineViewComponent} from './components/timeline-view/timeline-view.component';
import {AvailablesModule} from '../../../questionnaires/modules/availables/availables.module';
import {MatchsModule} from '../matchs/matchs.module';
import {QuestionnariesAvaliableModule} from '../questionnaries-avaliable/questionnaries-avaliable.module';
import {CoursesModule} from '../courses/courses.module';
import {PollsModule} from '../polls/polls.module';
import {SchedulesModule} from '../schedules/schedules.module';
import {QuestionnairesModule} from '../../../questionnaires/questionnaires.module';

@NgModule({
  declarations: [
    // containers
    TimelinesComponent,
    TimelinesListComponent,
    TimelinesDetailsComponent,
    // components
    TimelineListComponent,
    TimelineListSearchComponent,
    TimelineViewComponent
  ],
  imports: [
    CommonModule,
    TimelinesRoutingModule,
    // modules
    ReactiveFormsModule,
    MegaleiosFormsModule,
    SharedModule,
    NgxMaskModule.forChild(),
    AvailablesModule,
    MatchsModule,
    QuestionnairesModule,
    QuestionnariesAvaliableModule,
    CoursesModule,
    PollsModule,
    SchedulesModule
  ]
})
export class TimelinesModule { }
