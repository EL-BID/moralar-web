import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

// containers
import {PollsComponent} from './polls.component';
import {PollsListComponent} from './containers/polls-list/polls-list.component';
// components
import {PollListComponent} from './components/poll-list/poll-list.component';


import {PollsRoutingModule} from './polls-routing.module';
import {MegaleiosFormsModule} from '../../../megaleios-forms/megaleios-forms.module';
import {SharedModule} from '../../../shared/shared.module';


@NgModule({
  declarations: [
    // containers
    PollsComponent,
    PollsListComponent,
    // components
    PollListComponent
  ],
  exports: [
    PollsListComponent
  ],
  imports: [
    CommonModule,
    PollsRoutingModule,
    // modules
    ReactiveFormsModule,
    MegaleiosFormsModule,
    SharedModule,
    NgxMaskModule.forChild()
  ]
})
export class PollsModule { }
