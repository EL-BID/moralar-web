import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchsRoutingModule } from './matchs-routing.module';

// containers
import { MatchsComponent } from './matchs.component';
import { MatchsListComponent } from './containers/matchs-list/matchs-list.component';

// components
import { MatchListComponent } from './components/match-list/match-list.component';
import { MatchListSearchComponent } from './components/match-list-search/match-list-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MegaleiosFormsModule } from 'src/app/utils/modules/megaleios-forms/megaleios-forms.module';
import { SharedModule } from 'src/app/utils/modules/shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';
import Timeline = gsap.core.Timeline;
import {MatchsDetailsComponent} from './containers/matchs-details/matchs-details.component';
import {MatchViewComponent} from './components/match-view/match-view.component';

@NgModule({
  declarations: [
    // containers
    MatchsComponent,
    MatchsListComponent,
    MatchsDetailsComponent,
    // components
    MatchListComponent,
    MatchListSearchComponent,
    MatchViewComponent
  ],
  imports: [
    CommonModule,
    MatchsRoutingModule,
    // modules
    ReactiveFormsModule,
    MegaleiosFormsModule,
    SharedModule,
    NgxMaskModule.forChild()
  ]
})
export class MatchsModule { }
