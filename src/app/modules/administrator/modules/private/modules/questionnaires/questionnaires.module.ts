import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnairesRoutingModule } from './questionnaires-routing.module';

// modules
import { ReactiveFormsModule } from '@angular/forms';
import { MegaleiosFormsModule } from 'src/app/utils/modules/megaleios-forms/megaleios-forms.module';
import { SharedModule } from 'src/app/utils/modules/shared/shared.module';

// containers
import { QuestionnairesComponent } from './questionnaires.component';
import { QuestionnairesListComponent } from './containers/questionnaires-list/questionnaires-list.component';
import { QuestionnairesAddComponent } from './containers/questionnaires-add/questionnaires-add.component';

// components
import { QuestionnaireListComponent } from './components/questionnaire-list/questionnaire-list.component';
import { QuestionnaireListSearchComponent } from './components/questionnaire-list-search/questionnaire-list-search.component';
import { QuestionnaireFormComponent } from './components/questionnaire-form/questionnaire-form.component';

@NgModule({
  declarations: [
    // containers
    QuestionnairesComponent,
    QuestionnairesListComponent,
    QuestionnairesAddComponent,
    // components
    QuestionnaireListComponent,
    QuestionnaireListSearchComponent,
    QuestionnaireFormComponent
  ],
  imports: [
    CommonModule,
    QuestionnairesRoutingModule,
    // modules
    ReactiveFormsModule,
    MegaleiosFormsModule,
    SharedModule
  ]
})
export class QuestionnairesModule { }
