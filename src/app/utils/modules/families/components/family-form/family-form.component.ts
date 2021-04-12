import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {sortBy} from 'lodash';
import {FormComponentClass} from 'src/app/utils/classes/form-component.class';
import {isCpfValid, trimWhiteSpace} from 'src/app/utils/functions/validators.function';
import {GENDER_LIST, SCHOOLING_LIST, DEGREE_OF_KINSHIP_LIST} from 'src/app/utils/interfaces/families.interface';
import {DateTime} from 'luxon';
import {MegaleiosAlertService} from '../../../megaleios-alert/megaleios-alert.service';

@Component({
  selector: 'app-family-form',
  templateUrl: './family-form.component.html',
  styleUrls: ['./family-form.component.sass']
})
export class FamilyFormComponent extends FormComponentClass implements OnInit {
  dayMax = DateTime.local().toFormat('yyyy-MM-dd');
  checkDateValidator = false;
  genderList: any[] = sortBy(GENDER_LIST, 'name');
  schoolingList: any[] = SCHOOLING_LIST;
  degreeOfKinshipList: any[] = DEGREE_OF_KINSHIP_LIST;
  addressForm: FormGroup;
  holderForm: FormGroup;
  spouseForm: FormGroup;
  financialForm: FormGroup;
  priorizationForm: FormGroup;

  workFront: FormGroup;
  permanentDisabled: FormGroup;
  elderlyOverEighty: FormGroup;
  yearsInSextyAndSeventyNine: FormGroup;
  womanServedByProtectiveMeasure: FormGroup;
  femaleBreadWinner: FormGroup;
  singleParent: FormGroup;
  familyWithMoreThanFivePeople: FormGroup;
  childUnderEighteen: FormGroup;
  headOfHouseholdWithoutIncome: FormGroup;
  benefitOfContinuedProvision: FormGroup;
  familyPurse: FormGroup;
  involuntaryCohabitation: FormGroup;
  familyIncomeOfUpTwoMinimumWages: FormGroup;

  get membersForm(): FormArray {
    return this.form.controls.members as FormArray;
  }

  constructor(
    private formBuilder: FormBuilder,
    private megaleiosAlertService: MegaleiosAlertService
  ) {
    super();
    // FORM FILHOS
    this.addressForm = this.formBuilder.group({
      streetAddress: [null, Validators.required],
      number: [null, Validators.required],
      cityName: [null, Validators.required],
      cityId: [null, Validators.required],
      stateName: [null, Validators.required],
      stateUf: [null, Validators.required],
      stateId: [null, Validators.required],
      neighborhood: [null, Validators.required],
      complement: [null],
      location: ['-'],
      cep: [null, Validators.required]
    });
    this.holderForm = this.formBuilder.group({
      number: [null, Validators.compose([trimWhiteSpace, Validators.required])],
      name: [null, Validators.compose([trimWhiteSpace, Validators.required])],
      cpf: [null, Validators.compose([Validators.required, isCpfValid])],
      birthday: [null, Validators.required],
      genre: [null],
      email: [null, Validators.email],
      phone: [null, trimWhiteSpace],
      scholarity: [null],
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
      incrementValue: [null],
    });
    this.workFront = this.formBuilder.group({rate: 1, value: 'false'});
    this.permanentDisabled = this.formBuilder.group({rate: 2, value: 'false'});
    this.elderlyOverEighty = this.formBuilder.group({rate: 3, value: 'false'});
    this.yearsInSextyAndSeventyNine = this.formBuilder.group({rate: 14, value: 'false'});
    this.womanServedByProtectiveMeasure = this.formBuilder.group({rate: 4, value: 'false'});
    this.femaleBreadWinner = this.formBuilder.group({rate: 5, value: 'false'});
    this.singleParent = this.formBuilder.group({rate: 6, value: 'false'});
    this.familyWithMoreThanFivePeople = this.formBuilder.group({rate: 7, value: 'false'});
    this.childUnderEighteen = this.formBuilder.group({rate: 8, value: 'false'});
    this.headOfHouseholdWithoutIncome = this.formBuilder.group({rate: 9, value: 'false'});
    this.benefitOfContinuedProvision = this.formBuilder.group({rate: 10, value: 'false'});
    this.familyPurse = this.formBuilder.group({rate: 11, value: 'false'});
    this.involuntaryCohabitation = this.formBuilder.group({rate: 12, value: 'false'});
    this.familyIncomeOfUpTwoMinimumWages = this.formBuilder.group({rate: 13, value: 'false'});

    this.priorizationForm = this.formBuilder.group({
      workFront: this.workFront,
      permanentDisabled: this.permanentDisabled,
      elderlyOverEighty: this.elderlyOverEighty,
      yearsInSextyAndSeventyNine: this.yearsInSextyAndSeventyNine,
      womanServedByProtectiveMeasure: this.womanServedByProtectiveMeasure,
      femaleBreadWinner: this.femaleBreadWinner,
      singleParent: this.singleParent,
      familyWithMoreThanFivePeople: this.familyWithMoreThanFivePeople,
      childUnderEighteen: this.childUnderEighteen,
      headOfHouseholdWithoutIncome: this.headOfHouseholdWithoutIncome,
      benefitOfContinuedProvision: this.benefitOfContinuedProvision,
      familyPurse: this.familyPurse,
      involuntaryCohabitation: this.involuntaryCohabitation,
      familyIncomeOfUpTwoMinimumWages: this.familyIncomeOfUpTwoMinimumWages
    });
    // FORM PAI
    this.form = this.formBuilder.group({
      address: this.addressForm,
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
      this.workFront.patchValue({rate: 1, value: `${this.formData.priorization.workFront.value}`});
      this.permanentDisabled.patchValue({rate: 2, value: `${this.formData.priorization.permanentDisabled.value}`});
      this.elderlyOverEighty.patchValue({rate: 3, value: `${this.formData.priorization.elderlyOverEighty.value}`});
      this.yearsInSextyAndSeventyNine.patchValue({
        rate: 14,
        value: `${this.formData.priorization.yearsInSextyAndSeventyNine.value}`
      });
      this.womanServedByProtectiveMeasure.patchValue({
        rate: 4,
        value: `${this.formData.priorization.womanServedByProtectiveMeasure.value}`
      });
      this.femaleBreadWinner.patchValue({rate: 5, value: `${this.formData.priorization.femaleBreadWinner.value}`});
      this.singleParent.patchValue({rate: 6, value: `${this.formData.priorization.singleParent.value}`});
      this.familyWithMoreThanFivePeople.patchValue({
        rate: 7,
        value: `${this.formData.priorization.familyWithMoreThanFivePeople.value}`
      });
      this.childUnderEighteen.patchValue({rate: 8, value: `${this.formData.priorization.childUnderEighteen.value}`});
      this.headOfHouseholdWithoutIncome.patchValue({
        rate: 9,
        value: `${this.formData.priorization.headOfHouseholdWithoutIncome.value}`
      });
      this.benefitOfContinuedProvision.patchValue({
        rate: 10,
        value: `${this.formData.priorization.benefitOfContinuedProvision.value}`
      });
      this.familyPurse.patchValue({rate: 11, value: `${this.formData.priorization.familyPurse.value}`});
      this.involuntaryCohabitation.patchValue({
        rate: 12,
        value: `${this.formData.priorization.involuntaryCohabitation.value}`
      });
      this.familyIncomeOfUpTwoMinimumWages.patchValue({
        rate: 13,
        value: `${this.formData.priorization.familyIncomeOfUpTwoMinimumWages.value}`
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
      this.addressForm.patchValue(this.formData?.address);
    }
  }

  private createMemberForm(): FormGroup {
    return this.formBuilder.group({
      name: [null, trimWhiteSpace],
      birthday: [null],
      genre: [null],
      kinShip: [null],
      scholarity: [null]
    });
  }

  addMemberForm(): void {
    this.membersForm.push(this.createMemberForm());
  }

  removeMemberForm(index: number): void {
    this.membersForm.removeAt(index);
    // validator date
    if (this.holderForm.controls.birthday) {
      let i;
      for (i = 0; i < 1; i++) {
        if (this.holderForm.controls.birthday.value > this.dayMax || !this.holderForm.controls.birthday.value) {
          this.megaleiosAlertService.error('Data com formato inválido');
          this.checkDateValidator = false;
          break;
        }
      }
    }

    if (this.spouseForm.controls.birthday) {
      let i;
      for (i = 0; i < 1; i++) {
        if (this.spouseForm.controls.birthday.value > this.dayMax || !this.spouseForm.controls.birthday.value) {
          this.megaleiosAlertService.error('Data com formato inválido');
          this.checkDateValidator = false;
          break;
        }
      }
    }

    if (this.membersForm.length) {
      let i;
      for (i = 0; i < this.membersForm.length; i++) {
          if (this.membersForm.controls[i].value.birthday > this.dayMax || !this.membersForm.controls[i].value.birthday) {
            this.megaleiosAlertService.error('Data com formato inválido');
            this.checkDateValidator = false;
            break;
          }
      }
    }
  }

  checkDate(value){
    this.checkDateValidator = false;
    if (value > this.dayMax) {
      this.megaleiosAlertService.error('Data com formato inválido');
      return false;
    } else {
      this.checkDateValidator = true;
      return true;
    }
  }

}
