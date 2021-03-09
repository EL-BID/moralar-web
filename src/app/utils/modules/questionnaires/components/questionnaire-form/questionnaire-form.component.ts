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
        for (let j = 0; this.formData.questionViewModel[i].description.length > j; j++) {
          console.log(this.questionsForm.value[i].description[j]);
         // this.questionsForm.value[i].description.push({description: this.formData.questionViewModel[i].description[j].description}) ;
          // this.questionsForm.value[i].description.push(this.formData.questionViewModel[i].description[j]);
        }
      }
      // this.form.controls.questionRegister.value.question = this.formData.questionViewModel;
      console.log(this.form);
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
    // console.log(this.questionsForm.value[i].description[j]);
    // document.getElementById(`description-${j}`).value = '';
  }

}
