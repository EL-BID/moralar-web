import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ReactiveFormsModule} from '@angular/forms';

import {CURRENCY_MASK_CONFIG, CurrencyMaskModule} from 'ng2-currency-mask';

// consts
import { CustomCurrencyMaskConfig } from 'src/app/app.module';
import {NotificationsComponent} from './notifications.component';
import {NotificationsListComponent} from './containers/notifications-list/notifications-list.component';
import {NotificationListComponent} from './components/notification-list/notification-list.component';
import {NotificationListSearchComponent} from './components/notification-list-search/notification-list-search.component';
import {NotificationViewComponent} from './components/notification-view/notification-view.component';
import {NotificationsDetailsComponent} from './containers/notifications-details/notifications-details.component';
import {NotificationsAddComponent} from './containers/notifications-add/notifications-add.component';
import {MegaleiosFormsModule} from '../../../../../../utils/modules/megaleios-forms/megaleios-forms.module';
import {NotificationsRoutingModule} from './notifications-routing.module';
import {SharedModule} from "../../../../../../utils/modules/shared/shared.module";
import {FamiliesModule} from "../../../../../../utils/modules/families/families.module";
import {NotificationFormComponent} from "./components/notification-form/notification-form.component";
import {NgxMaskModule} from "ngx-mask";
@NgModule({
  declarations: [
    NotificationsComponent,
    // containers
    NotificationsListComponent,
    NotificationsAddComponent,
    NotificationsDetailsComponent,
    // components
    NotificationListComponent,
    NotificationListSearchComponent,
    NotificationListSearchComponent,
    NotificationViewComponent,
    NotificationFormComponent
  ],
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    // modules
    ReactiveFormsModule,
    MegaleiosFormsModule,
    CurrencyMaskModule,
    SharedModule,
    FamiliesModule,
    NgxMaskModule
  ],
  providers: [
    {
      provide: CURRENCY_MASK_CONFIG,
      useValue: CustomCurrencyMaskConfig
    }
  ]
})
export class NotificationsModule { }
