import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ReactiveFormsModule} from '@angular/forms';
import {MegaleiosFormsModule} from '../megaleios-forms/megaleios-forms.module';
import {SharedModule} from '../shared/shared.module';
import {CURRENCY_MASK_CONFIG, CurrencyMaskModule} from 'ng2-currency-mask';

// consts
import { CustomCurrencyMaskConfig } from 'src/app/app.module';
import {InformativesComponent} from './informatives.component';
import {InformativesListComponent} from './containers/informatives-list/informatives-list.component';
import {InformativesAddComponent} from './containers/informatives-add/informatives-add.component';
import {InformativesDetailsComponent} from './containers/informatives-details/informatives-details.component';
import {InformativeListSearchComponent} from './components/informative-list-search/informative-list-search.component';
import {InformativeListComponent} from './components/informative-list/informative-list.component';
import {InformativeFormComponent} from './components/informative-form/informative-form.component';
import {InformativeViewComponent} from './components/informative-view/informative-view.component';
import {InformativesRoutingModule} from './informatives-routing.module';
@NgModule({
  declarations: [
    InformativesComponent,
    // containers
    InformativesListComponent,
    InformativesAddComponent,
    InformativesDetailsComponent,
    // components
    InformativeListComponent,
    InformativeListSearchComponent,
    InformativeFormComponent,
    InformativeViewComponent
  ],
  imports: [
    CommonModule,
    InformativesRoutingModule,
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
export class InformativesModule { }
