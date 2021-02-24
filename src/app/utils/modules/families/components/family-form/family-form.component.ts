import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { sortBy } from 'lodash';
import { FormComponentClass } from 'src/app/utils/classes/form-component.class';
import { isCpfValid, trimWhiteSpace } from 'src/app/utils/functions/validators.function';
import { GENDER_LIST, SCHOOLING_LIST, DEGREE_OF_KINSHIP_LIST } from 'src/app/utils/interfaces/families.interface';

@Component({
  selector: 'app-family-form',
  templateUrl: './family-form.component.html',
  styleUrls: ['./family-form.component.sass']
})
export class FamilyFormComponent extends FormComponentClass {

  genderList: any[] = sortBy(GENDER_LIST, 'name');
  schoolingList: any[] = SCHOOLING_LIST;
  degreeOfKinshipList: any[] = DEGREE_OF_KINSHIP_LIST;
  holderForm: FormGroup;
  spouseForm: FormGroup;
  financialForm: FormGroup;
  priorizationForm: FormGroup;
  get membersForm(): FormArray {
    return this.form.controls.members as FormArray;
  }

  constructor(
    private formBuilder: FormBuilder
  ) {
    super();
    // FORM FILHOS
    this.holderForm = this.formBuilder.group( {
      number: [null, Validators.compose([trimWhiteSpace, Validators.required])],
      name: [null, Validators.compose([trimWhiteSpace, Validators.required])],
      cpf:  [null, Validators.compose([Validators.required, isCpfValid])],
      birthday: [null, Validators.required],
      genre:  [null],
      email: [null, Validators.compose([trimWhiteSpace, Validators.email])],
      phone: [null, trimWhiteSpace],
      scholarity: [null, Validators.required],
    });
    this.spouseForm = this.formBuilder.group( {
      name: [null, trimWhiteSpace],
      birthday: [null],
      genre: [null],
      scholarity: [null],
    });
    this.financialForm = this.formBuilder.group( {
      familyIncome: [null, Validators.required],
      propertyValueForDemolished: [null, Validators.required],
      maximumPurchase: [null, Validators.required],
      incrementValue: [null, Validators.required],
    });
    this.priorizationForm = this.formBuilder.group( {
      workFront: 'false',
      permanentDisabled: 'false',
      elderlyOverEighty: 'false',
      yearsInSextyAndSeventyNine: 'false',
      womanServedByProtectiveMeasure: 'false',
      femaleBreadWinner: 'false',
      singleParent: 'false',
      familyWithMoreThanFivePeople: 'false',
      childUnderEighteen: 'false',
      headOfHouseholdWithoutIncome: 'false',
      benefitOfContinuedProvision: 'false',
      familyPurse: 'false',
      involuntaryCohabitation: 'false',
      familyIncomeOfUpTwoMinimumWages: 'false'
    });
    // FORM PAI
    this.form = this.formBuilder.group({
      holder: this.holderForm,
      spouse: this.spouseForm,
      members: this.formBuilder.array([]),
      financial: this.financialForm,
      priorization: this.priorizationForm,

    });
  }

  private createMemberForm(): FormGroup {
    return this.formBuilder.group({
      name: [null, Validators.compose([trimWhiteSpace, Validators.required])],
      birthday: [null, Validators.required],
      genre: [null, Validators.required],
      kinShip: [null, Validators.required],
      scholarity: [null, Validators.required]
    });
  }

  addMemberForm(): void {
    this.membersForm.push(this.createMemberForm());
  }

  removeMemberForm(index: number): void {
    this.membersForm.removeAt(index);
  }

}
