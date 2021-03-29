import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

// containers
import { QuestionnariesAvaliableComponent } from './questionnaries-avaliable.component';
import {MegaleiosFormsModule} from '../../../../../../../../utils/modules/megaleios-forms/megaleios-forms.module';
import {SharedModule} from '../../../../../../../../utils/modules/shared/shared.module';
import {QuestionnariesAvaliableRoutingModule} from './questionnaries-avaliable-routing.module';
import {QuestionnariesAvaliableListComponent} from './containers/questionnaries-avaliable-list/questionnaries-avaliable-list.component';
import {QuestionnareAvaliableListComponent} from "./components/questionnare-avaliable-list/questionnare-avaliable-list.component";


@NgModule({
  declarations: [
    // containers
    QuestionnariesAvaliableComponent,
    QuestionnariesAvaliableListComponent,
    QuestionnareAvaliableListComponent
  ],
  exports: [
    QuestionnariesAvaliableListComponent
  ],
  imports: [
    CommonModule,
    QuestionnariesAvaliableRoutingModule,
    // modules
    ReactiveFormsModule,
    MegaleiosFormsModule,
    SharedModule,
    NgxMaskModule.forChild()
  ]
})
export class QuestionnariesAvaliableModule { }
