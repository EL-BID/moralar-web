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
    NgxMaskModule.forChild()
  ]
})
export class TimelinesModule { }
