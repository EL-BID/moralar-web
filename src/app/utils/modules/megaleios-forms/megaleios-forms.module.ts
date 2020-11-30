import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// components
import { ControlFieldComponent } from './components/control-field/control-field.component';
import { ControlErrorComponent } from './components/control-error/control-error.component';
import { ControlCheckboxComponent } from './components/control-checkbox/control-checkbox.component';
import { ControlRadioComponent } from './components/control-radio/control-radio.component';
import { ControlDatePickerComponent } from './components/control-date-picker/control-date-picker.component';
import { ControlTipComponent } from './components/control-tip/control-tip.component';

// services
import { MegaleiosFormsService } from './megaleios-forms.service';

const DECLARATIONS = [
  // components
  ControlFieldComponent,
  ControlErrorComponent,
  ControlCheckboxComponent,
  ControlRadioComponent,
  ControlDatePickerComponent,
  ControlTipComponent
];

@NgModule({
  declarations: DECLARATIONS,
  imports: [
    CommonModule,
    // modules
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  exports: DECLARATIONS,
  providers: [
    // services
    MegaleiosFormsService
  ]
})
export class MegaleiosFormsModule { }
