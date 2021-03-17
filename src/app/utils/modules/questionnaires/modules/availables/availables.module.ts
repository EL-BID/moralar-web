import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvailablesRoutingModule } from './availables-routing.module';

// modules
import { ReactiveFormsModule } from '@angular/forms';
import { MegaleiosFormsModule } from '../../../megaleios-forms/megaleios-forms.module';
import { SharedModule } from '../../../shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';

// containers
import { AvailablesComponent } from './availables.component';
import { AvailablesListComponent } from './containers/availables-list/availables-list.component';
import { AvailablesDetailsComponent } from './containers/availables-details/availables-details.component';
import { AvailableListComponent } from './components/available-list/available-list.component';
import { AvailableListSearchComponent } from './components/available-list-search/available-list-search.component';
import {ReleasesAddComponent} from './containers/releases-add/releases-add.component';
import {ReleasesFamiliesListComponent} from './containers/releases-families-list/releases-families-list.component';
import {ReleaseFamilyListComponent} from './components/release-family-list/release-family-list.component';
import {ReleaseFamilyListSearchComponent} from './components/release-family-list-search/release-family-list-search.component';
import {ReleaseFormComponent} from './components/release-form/release-form.component';
import {ReleaseViewComponent} from "./components/release-view/release-view.component";

@NgModule({
  declarations: [
    // containers
    AvailablesComponent,
    AvailablesListComponent,
    AvailablesDetailsComponent,
    ReleaseFormComponent,
    ReleasesAddComponent,
    AvailableListComponent,
    AvailableListSearchComponent,
    ReleasesFamiliesListComponent,
    ReleaseFamilyListComponent,
    ReleaseFamilyListSearchComponent,
    ReleaseViewComponent
  ],
  imports: [
    CommonModule,
    AvailablesRoutingModule,
    // modules
    ReactiveFormsModule,
    MegaleiosFormsModule,
    SharedModule,
    NgxMaskModule.forChild()
  ]
})
export class AvailablesModule { }
