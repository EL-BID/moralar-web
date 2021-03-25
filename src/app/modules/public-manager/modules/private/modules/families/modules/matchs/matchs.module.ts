import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchsRoutingModule } from './matchs-routing.module';

// containers
import { MatchsComponent } from './matchs.component';
import { MatchsListComponent } from './containers/matchs-list/matchs-list.component';

// components
import { MatchListComponent } from './components/match-list/match-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MegaleiosFormsModule } from 'src/app/utils/modules/megaleios-forms/megaleios-forms.module';
import { SharedModule } from 'src/app/utils/modules/shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';
import Timeline = gsap.core.Timeline;
import {NgbAccordionModule, NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeTestingModule} from '@fortawesome/angular-fontawesome/testing';
import {FamiliesModule} from '../../../../../../../../utils/modules/families/families.module';
import {PropertiesModule} from '../../../../../../../../utils/modules/properties/properties.module';

@NgModule({
  declarations: [
    // containers
    MatchsComponent,
    MatchsListComponent,
    // components
    MatchListComponent
  ],
  exports: [
    MatchsListComponent
  ],
  imports: [
    CommonModule,
    MatchsRoutingModule,
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
export class MatchsModule { }
