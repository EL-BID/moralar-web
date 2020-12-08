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

@NgModule({
  declarations: [
    // containers
    TimelinesComponent,
    TimelinesListComponent,
    // components
    TimelineListComponent,
    TimelineListSearchComponent
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
