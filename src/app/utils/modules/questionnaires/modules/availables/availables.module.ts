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

@NgModule({
  declarations: [
    // containers
    AvailablesComponent,
    AvailablesListComponent,
    AvailablesDetailsComponent,
    AvailableListComponent,
    AvailableListSearchComponent
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
