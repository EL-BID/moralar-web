import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';

// modules
import { ReactiveFormsModule } from '@angular/forms';
import { MegaleiosFormsModule } from 'src/app/utils/modules/megaleios-forms/megaleios-forms.module';

// containers
import { DashboardComponent } from './dashboard.component';
import { DashboardDetailsComponent } from './containers/dashboard-details/dashboard-details.component';
import { SharedModule } from 'src/app/utils/modules/shared/shared.module';

@NgModule({
  declarations: [
    // containers
    DashboardComponent,
    DashboardDetailsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    // modules
    ReactiveFormsModule,
    MegaleiosFormsModule,
    SharedModule
  ]
})
export class DashboardModule { }
