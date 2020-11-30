import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';

// modules
import { ReactiveFormsModule } from '@angular/forms';
import { MegaleiosFormsModule } from 'src/app/utils/modules/megaleios-forms/megaleios-forms.module';
import { SharedModule } from 'src/app/utils/modules/shared/shared.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

// containers
import { UsersComponent } from './users.component';
import { UsersListComponent } from './containers/users-list/users-list.component';

// components
import { UserListComponent } from './components/user-list/user-list.component';
import { UserListSearchComponent } from './components/user-list-search/user-list-search.component';

@NgModule({
  declarations: [
    // containers
    UsersComponent,
    UsersListComponent,
    // components
    UserListComponent,
    UserListSearchComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    // modules
    ReactiveFormsModule,
    MegaleiosFormsModule,
    SharedModule,
    NgbModalModule
  ],
  exports: [
    // components
    UserListComponent,
    UserListSearchComponent
  ]
})
export class UsersModule { }
