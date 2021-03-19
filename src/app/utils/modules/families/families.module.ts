import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamiliesRoutingModule } from './families-routing.module';

// modules
import { ReactiveFormsModule } from '@angular/forms';
import { MegaleiosFormsModule } from 'src/app/utils/modules/megaleios-forms/megaleios-forms.module';
import { SharedModule } from 'src/app/utils/modules/shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';
import { CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';

// containers
import { FamiliesComponent } from './families.component';
import { FamiliesListComponent } from './containers/families-list/families-list.component';
import { FamiliesAddComponent } from './containers/families-add/families-add.component';
import { FamiliesDetailsComponent } from './containers/families-details/families-details.component';

// components
import { FamilyListComponent } from './components/family-list/family-list.component';
import { FamilyListSearchComponent } from './components/family-list-search/family-list-search.component';
import { FamilyFormComponent } from './components/family-form/family-form.component';
import {FamilyViewComponent} from './components/family-view/family-view.component';

// consts
import { CustomCurrencyMaskConfig } from 'src/app/app.module';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {PropertiesModule} from "../properties/properties.module";


@NgModule({
  declarations: [
    // containers
    FamiliesComponent,
    FamiliesListComponent,
    FamiliesAddComponent,
    FamiliesDetailsComponent,
    // components
    FamilyListComponent,
    FamilyListSearchComponent,
    FamilyFormComponent,
    FamilyViewComponent
  ],
  imports: [
    CommonModule,
    FamiliesRoutingModule,
    // modules
    ReactiveFormsModule,
    MegaleiosFormsModule,
    SharedModule,
    NgxMaskModule.forChild(),
    CurrencyMaskModule,
    FontAwesomeModule,
    PropertiesModule
  ],
  exports: [
    FamilyListSearchComponent,
    FamilyListComponent,
    FamilyFormComponent,
    FamilyViewComponent
  ],
  providers: [
    {
      provide: CURRENCY_MASK_CONFIG,
      useValue: CustomCurrencyMaskConfig
    }
  ]
})
export class FamiliesModule { }
