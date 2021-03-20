import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NotificationsComponent} from './notifications.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MegaleiosFormsModule} from '../megaleios-forms/megaleios-forms.module';
import {SharedModule} from '../shared/shared.module';
import {CURRENCY_MASK_CONFIG, CurrencyMaskModule} from 'ng2-currency-mask';
// consts
import { CustomCurrencyMaskConfig } from 'src/app/app.module';
import {NotificationsListComponent} from './containers/notifications-list/notifications-list.component';
import {NotificationListComponent} from './components/notification-list/notification-list.component';
import {NotificationsRoutingModule} from "./notifications-routing.module";
@NgModule({
  declarations: [
    NotificationsComponent,
    // containers
    NotificationsListComponent,
    // components
    NotificationListComponent,
  ],
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    // modules
    ReactiveFormsModule,
    MegaleiosFormsModule,
    SharedModule,
    CurrencyMaskModule
  ],
  exports: [
    NotificationsListComponent
  ],
  providers: [
    {
      provide: CURRENCY_MASK_CONFIG,
      useValue: CustomCurrencyMaskConfig
    }
  ]
})
export class NotificationsModule { }
