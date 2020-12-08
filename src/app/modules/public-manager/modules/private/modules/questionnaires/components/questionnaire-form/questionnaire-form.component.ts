import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormComponentClass } from 'src/app/utils/classes/form-component.class';
import { trimWhiteSpace } from 'src/app/utils/functions/validators.function';

@Component({
  selector: 'app-questionnaire-form',
  templateUrl: './questionnaire-form.component.html',
  styleUrls: ['./questionnaire-form.component.sass']
})
export class QuestionnaireFormComponent extends FormComponentClass {

  constructor(
    formBuilder: FormBuilder
  ) {
    super();
    this.form = formBuilder.group({
      title: [null, Validators.compose([trimWhiteSpace, Validators.required])]
    });
  }

}
