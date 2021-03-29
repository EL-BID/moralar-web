import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';

// modules
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// containers
import { PrivateComponent } from './private.component';

// directives
import { NavDirective } from './directives/nav.directive';
import {SharedModule} from '../../../../utils/modules/shared/shared.module';
import {NotificationsModule} from '../../../../utils/modules/notifications/notifications.module';

@NgModule({
  declarations: [
    // containers
    PrivateComponent,
    // directives
    NavDirective
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    // modules
    NgbDropdownModule,
    FontAwesomeModule,
    SharedModule,
    NotificationsModule
  ]
})
export class PrivateModule { }
