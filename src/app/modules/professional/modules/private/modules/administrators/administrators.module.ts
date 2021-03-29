import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministratorsRoutingModule } from './administrators-routing.module';

// modules
import { ReactiveFormsModule } from '@angular/forms';
import { MegaleiosFormsModule } from 'src/app/utils/modules/megaleios-forms/megaleios-forms.module';
import { SharedModule } from 'src/app/utils/modules/shared/shared.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

// containers
import { AdministratorsComponent } from './administrators.component';
import { AdministratorsListComponent } from './containers/administrators-list/administrators-list.component';
import { AdministratorsAddComponent } from './containers/administrators-add/administrators-add.component';
import { AdministratorsDetailsComponent } from './containers/administrators-details/administrators-details.component';

// components
import { AdministratorListComponent } from './components/administrator-list/administrator-list.component';
import { AdministratorListSearchComponent } from './components/administrator-list-search/administrator-list-search.component';
import { AdministratorFormComponent } from './components/administrator-form/administrator-form.component';

@NgModule({
  declarations: [
    // containers
    AdministratorsComponent,
    AdministratorsListComponent,
    AdministratorsAddComponent,
    AdministratorsDetailsComponent,
    // components
    AdministratorListComponent,
    AdministratorListSearchComponent,
    AdministratorFormComponent
  ],
  imports: [
    CommonModule,
    AdministratorsRoutingModule,
    // modules
    ReactiveFormsModule,
    MegaleiosFormsModule,
    SharedModule,
    NgbModalModule
  ],
  exports: [
    // components
    AdministratorFormComponent
  ]
})
export class AdministratorsModule { }
