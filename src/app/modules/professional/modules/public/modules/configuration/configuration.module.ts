import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationRoutingModule } from './configuration-routing.module';

// modules
import { ReactiveFormsModule } from '@angular/forms';
import { MegaleiosFormsModule } from 'src/app/utils/modules/megaleios-forms/megaleios-forms.module';
import { SharedModule } from 'src/app/utils/modules/shared/shared.module';

// containers
import { ConfigurationComponent } from './configuration.component';

// components
import { ConfigurationFormComponent } from './components/configuration-form/configuration-form.component';

@NgModule({
  declarations: [
    // containers
    ConfigurationComponent,
    // components
    ConfigurationFormComponent
  ],
  imports: [
    CommonModule,
    ConfigurationRoutingModule,
    // modules
    ReactiveFormsModule,
    MegaleiosFormsModule,
    SharedModule
  ]
})
export class ConfigurationModule { }
