import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PollsRoutingModule} from './polls-routing.module';

// modules
import { ReactiveFormsModule } from '@angular/forms';
import { MegaleiosFormsModule } from 'src/app/utils/modules/megaleios-forms/megaleios-forms.module';
import { SharedModule } from 'src/app/utils/modules/shared/shared.module';

// containers
import {PollsComponent} from './polls.component';
import {PollsListComponent} from './containers/polls-list/polls-list.component';
import {PollsAddComponent} from './containers/polls-add/polls-add.component';
import {PollsDetailsComponent} from './containers/polls-details/polls-details.component';

// components
import {PollListComponent} from './components/poll-list/poll-list.component';
import {PollListSearchComponent} from './components/poll-list-search/poll-list-search.component';
import {PollFormComponent} from './components/poll-form/poll-form.component';
import {PollViewComponent} from './components/poll-view/poll-view.component';

@NgModule({
  declarations: [
    // containers
    PollsComponent,
    PollsListComponent,
    PollsAddComponent,
    PollsDetailsComponent,
    // components
    PollListComponent,
    PollListSearchComponent,
    PollFormComponent,
    PollViewComponent
  ],
  imports: [
    CommonModule,
    PollsRoutingModule,
    // modules
    ReactiveFormsModule,
    MegaleiosFormsModule,
    SharedModule
  ]
})
export class PollsModule { }
