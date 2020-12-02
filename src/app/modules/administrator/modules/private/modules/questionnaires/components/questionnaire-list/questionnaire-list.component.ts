import { Component } from '@angular/core';
import { ListComponentClass } from 'src/app/utils/classes/list-component.class';

@Component({
  selector: 'app-questionnaire-list',
  templateUrl: './questionnaire-list.component.html',
  styleUrls: ['./questionnaire-list.component.sass']
})
export class QuestionnaireListComponent extends ListComponentClass { }
