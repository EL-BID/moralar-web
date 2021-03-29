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
export class QuestionnaireFormComponent extends FormComponentClass implements OnInit{
  questionAnswerTypesList: any[] = QUESTIONANSWER_TYPES_LIST;
  questReg: FormGroup;
  desc: FormGroup;
  options: FormGroup;

  get questionsForm(): FormArray {
    return this.questReg.controls.question as FormArray;
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


  ngOnInit(): void {
    if (this.formData) {
      for (let i = 0; this.formData.questionViewModel.length > i; i++) {
        this.questionsForm.push(
          this.formBuilder.group({
            nameQuestion: [this.formData.questionViewModel[i].nameQuestion, Validators.compose([trimWhiteSpace, Validators.required])],
            typeResponse: [this.formData.questionViewModel[i].typeResponse, Validators.required],
            description:  [this.formData.questionViewModel[i].description]
          })
        );
      }
    }
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

  addDescForm(i): void {
   this.questionsForm.value[i].description.push({description: ''}) ;

  }

  removeDescForm(i, j): void {
    i.splice(j, 1);
  }

}
