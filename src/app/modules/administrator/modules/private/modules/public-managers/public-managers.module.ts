import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicManagersRoutingModule } from './public-managers-routing.module';

// modules
import { ReactiveFormsModule } from '@angular/forms';
import { MegaleiosFormsModule } from 'src/app/utils/modules/megaleios-forms/megaleios-forms.module';
import { SharedModule } from 'src/app/utils/modules/shared/shared.module';

// containers
import { PublicManagersComponent } from './public-managers.component';
import { PublicManagersListComponent } from './containers/public-managers-list/public-managers-list.component';
import { PublicManagersAddComponent } from './containers/public-managers-add/public-managers-add.component';

// components
import { PublicManagerListComponent } from './components/public-manager-list/public-manager-list.component';
import { PublicManagerListSearchComponent } from './components/public-manager-list-search/public-manager-list-search.component';
import { PublicManagerFormComponent } from './components/public-manager-form/public-manager-form.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    // containers
    PublicManagersComponent,
    PublicManagersListComponent,
    PublicManagersAddComponent,
    // components
    PublicManagerListComponent,
    PublicManagerListSearchComponent,
    PublicManagerFormComponent
  ],
  imports: [
    CommonModule,
    PublicManagersRoutingModule,
    // modules
    ReactiveFormsModule,
    MegaleiosFormsModule,
    SharedModule,
    NgxMaskModule.forChild()
  ]
})
export class PublicManagersModule { }
