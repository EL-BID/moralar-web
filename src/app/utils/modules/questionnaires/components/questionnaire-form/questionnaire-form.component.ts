import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FormComponentClass } from 'src/app/utils/classes/form-component.class';
import { trimWhiteSpace } from 'src/app/utils/functions/validators.function';
import {QUESTIONANSWER_TYPES_LIST} from 'src/app/utils/interfaces/questionnaires.interface';


@Component({
  selector: 'app-questionnaire-form',
  templateUrl: './questionnaire-form.component.html',
  styleUrls: ['./questionnaire-form.component.sass']
})
export class QuestionnaireFormComponent extends FormComponentClass {
  questionAnswerTypesList: any[] = QUESTIONANSWER_TYPES_LIST;
  questReg: FormGroup;
  desc: FormGroup;
  options: FormGroup;

  get questionsForm(): FormArray {
    return this.questReg.controls.question as FormArray;
  }
  get descriptionForm(): FormArray {
    return this.desc.controls.description as FormArray;
  }
  constructor(
    private formBuilder: FormBuilder
  ) {
    super();
    this.form = this.formBuilder.group({
      title: [null, Validators.compose([trimWhiteSpace, Validators.required])],
      typeQuiz: [0],
      questionRegister:
        this.questReg = this.formBuilder.group({
        question: this.formBuilder.array([])
      }),

    });
  }

  private createQuestionForm(): FormGroup {
    return this.formBuilder.group({
      nameQuestion: [null, Validators.compose([trimWhiteSpace, Validators.required])],
      typeResponse: [0, Validators.required],
      description: this.formBuilder.array([])

    });
  }

  addQuestionForm(): void {
    this.questionsForm.push(this.createQuestionForm());
  }

  removeQuestionForm(index: number): void {
    this.questionsForm.removeAt(index);
  }

  private createDescriptionForm(): FormGroup {
    return this.formBuilder.group({
      description: ''
    });
  }

  onChangeTypeResponse() {   // switch (this.desc.controls.typeResponse.value) {
   //   case 0: this.desc.value.description = []; break;
   // }
  }


  addDescForm(i): void {
    // this.desc[i].value = 'AAAA';
   this.questionsForm.value[i].description.push({description: ''}) ;
   //   console.log();

  }

  removeDescForm(i, j): void {
    console.log(this.questionsForm.value[i].description[j]);
    document.getElementById(`description-${j}`).value = '';
  }

}
