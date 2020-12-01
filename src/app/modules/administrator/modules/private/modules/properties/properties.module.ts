import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesRoutingModule } from './properties-routing.module';

// modules
import { ReactiveFormsModule } from '@angular/forms';
import { MegaleiosFormsModule } from 'src/app/utils/modules/megaleios-forms/megaleios-forms.module';
import { SharedModule } from 'src/app/utils/modules/shared/shared.module';
import { CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';

// containers
import { PropertiesComponent } from './properties.component';
import { PropertiesListComponent } from './containers/properties-list/properties-list.component';
import { PropertiesAddComponent } from './containers/properties-add/properties-add.component';
import { PropertiesDetailsComponent } from './containers/properties-details/properties-details.component';

// components
import { PropertyListComponent } from './components/property-list/property-list.component';
import { PropertyListSearchComponent } from './components/property-list-search/property-list-search.component';
import { PropertyFormComponent } from './components/property-form/property-form.component';
import { PropertyViewComponent } from './components/property-view/property-view.component';

// consts
import { CustomCurrencyMaskConfig } from 'src/app/app.module';

@NgModule({
  declarations: [
    // containers
    PropertiesComponent,
    PropertiesListComponent,
    PropertiesAddComponent,
    PropertiesDetailsComponent,
    // components
    PropertyListComponent,
    PropertyListSearchComponent,
    PropertyFormComponent,
    PropertyViewComponent
  ],
  imports: [
    CommonModule,
    PropertiesRoutingModule,
    // modules
    ReactiveFormsModule,
    MegaleiosFormsModule,
    SharedModule,
    CurrencyMaskModule
  ],
  providers: [
    {
      provide: CURRENCY_MASK_CONFIG,
      useValue: CustomCurrencyMaskConfig
    }
  ]
})
export class PropertiesModule { }
