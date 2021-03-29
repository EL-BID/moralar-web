import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordResetRoutingModule } from './password-reset-routing.module';

// modules
import { ReactiveFormsModule } from '@angular/forms';
import { MegaleiosFormsModule } from 'src/app/utils/modules/megaleios-forms/megaleios-forms.module';
import { SharedModule } from 'src/app/utils/modules/shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';

// containers
import { PasswordResetComponent } from './containers/password-reset/password-reset.component';
import { PasswordResetFormComponent } from './components/password-reset-form/password-reset-form.component';

@NgModule({
  declarations: [
    // containers
    PasswordResetComponent,
    PasswordResetFormComponent
  ],
  imports: [
    CommonModule,
    PasswordResetRoutingModule,
    // modules
    ReactiveFormsModule,
    MegaleiosFormsModule,
    SharedModule,
    NgxMaskModule.forChild()
  ]
})
export class PasswordResetModule { }
