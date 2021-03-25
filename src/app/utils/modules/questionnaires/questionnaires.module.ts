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
import { QuestionnairesDetailsComponent } from './containers/questionnaires-details/questionnaires-details.component';

// components
import { QuestionnaireListComponent } from './components/questionnaire-list/questionnaire-list.component';
import { QuestionnaireListSearchComponent } from './components/questionnaire-list-search/questionnaire-list-search.component';
import { QuestionnaireFormComponent } from './components/questionnaire-form/questionnaire-form.component';
import { QuestionnaireViewComponent } from './components/questionnaire-view/questionnaire-view.component';

@NgModule({
  declarations: [
    // containers
    QuestionnairesComponent,
    QuestionnairesListComponent,
    QuestionnairesAddComponent,
    QuestionnairesDetailsComponent,
    // components
    QuestionnaireListComponent,
    QuestionnaireListSearchComponent,
    QuestionnaireFormComponent,
    QuestionnaireViewComponent
  ],
  exports: [
    QuestionnaireListComponent
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
