import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessionalsRoutingModule } from './professionals-routing.module';

// modules
import { ReactiveFormsModule } from '@angular/forms';
import { MegaleiosFormsModule } from 'src/app/utils/modules/megaleios-forms/megaleios-forms.module';
import { SharedModule } from 'src/app/utils/modules/shared/shared.module';

// containers
import { ProfessionalsComponent } from './professionals.component';
import { ProfessionalsListComponent } from './containers/professionals-list/professionals-list.component';
import { ProfessionalsAddComponent } from './containers/professionals-add/professionals-add.component';

// components
import { ProfessionalListComponent } from './components/professional-list/professional-list.component';
import { ProfessionalListSearchComponent } from './components/professional-list-search/professional-list-search.component';
import { ProfessionalFormComponent } from './components/professional-form/professional-form.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    // containers
    ProfessionalsComponent,
    ProfessionalsListComponent,
    ProfessionalsAddComponent,
    // components
    ProfessionalListComponent,
    ProfessionalListSearchComponent,
    ProfessionalFormComponent
  ],
  imports: [
    CommonModule,
    ProfessionalsRoutingModule,
    // modules
    ReactiveFormsModule,
    MegaleiosFormsModule,
    SharedModule,
    NgxMaskModule.forChild()
  ]
})
export class ProfessionalsModule { }
