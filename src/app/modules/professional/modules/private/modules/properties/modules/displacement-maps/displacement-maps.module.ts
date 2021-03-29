import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// containers
import {DisplacementMapsComponent} from './displacement-maps.component';
import {DisplacementMapsListComponent} from './containers/displacement-maps-list/displacement-maps-list.component';
// components
import {DisplacementMapListComponent} from './components/displacement-map-list/displacement-map-list.component';
import {DisplacementMapListSearchComponent} from './components/displacement-map-list-search/displacement-map-list-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MegaleiosFormsModule } from 'src/app/utils/modules/megaleios-forms/megaleios-forms.module';
import { SharedModule } from 'src/app/utils/modules/shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';
import Timeline = gsap.core.Timeline;
import { DisplacementMapsRoutingModule } from './displacement-maps-routing.module';


@NgModule({
  declarations: [
    // containers
    DisplacementMapsComponent,
    DisplacementMapsListComponent,
    // components
    DisplacementMapListComponent,
    DisplacementMapListSearchComponent
  ],
  imports: [
    CommonModule,
    DisplacementMapsRoutingModule,
    // modules
    ReactiveFormsModule,
    MegaleiosFormsModule,
    SharedModule,
    NgxMaskModule.forChild()
  ]
})
export class DisplacementMapsModule { }
