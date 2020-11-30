import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsRoutingModule } from './notifications-routing.module';

// modules
import { SharedModule } from 'src/app/utils/modules/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MegaleiosFormsModule } from 'src/app/utils/modules/megaleios-forms/megaleios-forms.module';
import { UsersModule } from '../users/users.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

// containers
import { NotificationsComponent } from './notifications.component';
import { NotificationFormComponent } from './components/notification-form/notification-form.component';
import { NotificationsListComponent } from './containers/notifications-list/notifications-list.component';

@NgModule({
  declarations: [
    // containers
    NotificationsComponent,
    NotificationFormComponent,
    NotificationsListComponent,
  ],
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    // modules
    ReactiveFormsModule,
    MegaleiosFormsModule,
    SharedModule,
    UsersModule,
    NgbModalModule
  ]
})
export class NotificationsModule { }
