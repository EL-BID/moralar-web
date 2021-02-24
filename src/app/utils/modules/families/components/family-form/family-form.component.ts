import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {sortBy} from 'lodash';
import {FormComponentClass} from 'src/app/utils/classes/form-component.class';
import {isCpfValid, trimWhiteSpace} from 'src/app/utils/functions/validators.function';
import {GENDER_LIST, SCHOOLING_LIST, DEGREE_OF_KINSHIP_LIST} from 'src/app/utils/interfaces/families.interface';
import {dateToString} from "../../../../functions/date.function";


@Component({
  selector: 'app-family-form',
  templateUrl: './family-form.component.html',
  styleUrls: ['./family-form.component.sass']
})
export class FamilyFormComponent extends FormComponentClass implements OnInit {

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
    this.holderForm = this.formBuilder.group({
      number: [null, Validators.compose([trimWhiteSpace, Validators.required])],
      name: [null, Validators.compose([trimWhiteSpace, Validators.required])],
      cpf: [null, Validators.compose([Validators.required, isCpfValid])],
      birthday: [null, Validators.required],
      genre: [null],
      email: [null, Validators.compose([trimWhiteSpace, Validators.email])],
      phone: [null, trimWhiteSpace],
      scholarity: [null, Validators.required],
    });
    this.spouseForm = this.formBuilder.group({
      name: [null, trimWhiteSpace],
      birthday: [null],
      genre: [null],
      scholarity: [null],
    });
    this.financialForm = this.formBuilder.group({
      familyIncome: [null, Validators.required],
      propertyValueForDemolished: [null, Validators.required],
      maximumPurchase: [null, Validators.required],
      incrementValue: [null, Validators.required],
    });
    this.priorizationForm = this.formBuilder.group({
      workFront: false,
      permanentDisabled: false,
      elderlyOverEighty: false,
      yearsInSextyAndSeventyNine: false,
      womanServedByProtectiveMeasure: false,
      femaleBreadWinner: false,
      singleParent: false,
      familyWithMoreThanFivePeople: false,
      childUnderEighteen: false,
      headOfHouseholdWithoutIncome: false,
      benefitOfContinuedProvision: false,
      familyPurse: false,
      involuntaryCohabitation: false,
      familyIncomeOfUpTwoMinimumWages: false
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

  ngOnInit(): void {
    if (this.formData) {
      this.form.patchValue(this.formData);
      this.priorizationForm.patchValue({
        workFront: `${this.formData.priorization.workFront}`,
        permanentDisabled: `${this.formData.priorization.permanentDisabled}`,
        elderlyOverEighty: `${this.formData.priorization.elderlyOverEighty}`,
        yearsInSextyAndSeventyNine: `${this.formData.priorization.yearsInSextyAndSeventyNine}`,
        womanServedByProtectiveMeasure: `${this.formData.priorization.womanServedByProtectiveMeasure}`,
        femaleBreadWinner: `${this.formData.priorization.femaleBreadWinner}`,
        singleParent: `${this.formData.priorization.singleParent}`,
        familyWithMoreThanFivePeople: `${this.formData.priorization.familyWithMoreThanFivePeople}`,
        childUnderEighteen: `${this.formData.priorization.childUnderEighteen}`,
        headOfHouseholdWithoutIncome: `${this.formData.priorization.headOfHouseholdWithoutIncome}`,
        benefitOfContinuedProvision: `${this.formData.priorization.benefitOfContinuedProvision}`,
        familyPurse: `${this.formData.priorization.familyPurse}`,
        involuntaryCohabitation: `${this.formData.priorization.involuntaryCohabitation}`,
        familyIncomeOfUpTwoMinimumWages: `${this.formData.priorization.familyIncomeOfUpTwoMinimumWages}`
      });
      for (let i = 0; this.formData.members.length > i; i++) {
        this.membersForm.push(
          this.formBuilder.group({
            name: [this.formData.members[i].name, Validators.compose([trimWhiteSpace, Validators.required])],
            birthday: [this.formData.members[i].birthday, Validators.required],
            genre: [this.formData.members[i].genre, Validators.required],
            kinShip: [this.formData.members[i].kinShip, Validators.required],
            scholarity: [this.formData.members[i].scholarity, Validators.required]
          })
        );
      }
    }
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
