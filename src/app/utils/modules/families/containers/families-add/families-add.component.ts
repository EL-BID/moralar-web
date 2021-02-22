import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { OnDestroyClass } from 'src/app/utils/classes/on-destroy.class';
import { MegaleiosAlertService } from 'src/app/utils/modules/megaleios-alert/megaleios-alert.service';
import { HttpService } from 'src/app/utils/services/http/http.service';
import { dateToSeconds } from 'src/app/utils/functions/date.function';

@Component({
  selector: 'app-families-add',
  templateUrl: './families-add.component.html',
  styleUrls: ['./families-add.component.sass']
})
export class FamiliesAddComponent extends OnDestroyClass {

  formLoading = false;

  constructor(
    private httpService: HttpService,
    private megaleiosAlertService: MegaleiosAlertService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    super();
  }

  form: any;

  handleFormSubmit(value: any): void {
   // console.log(value)
    this.form = {

      holder: {
        number: value.number,
        name: value.holderName,
        cpf: value.holderCpf,
        birthday: dateToSeconds(value.birthdate),
        genre: value.gender,
        email: value.email,
        phone: value.phone,
        scholarity: value.schooling,
      },
      spouse: {
        name: value.spouseName,
        birthday: dateToSeconds(value.spouseBirthdate),
        genre: value.spouseGender,
        scholarity: value.spouseSchooling
      },
      members:  [],
      financial: {
        familyIncome: value.familyIncome,
        propertyValueForDemolished: value.propertyCurrentValue,
        maximumPurchase: value.propertyBuyValue,
        incrementValue: value.propertyIncrementValue
      },
      priorization: {
        workFront: value.workFront,
        permanentDisabled: value.permanentDisabled,
        elderlyOverEighty: value.elderlyOverEighty,
        yearsInSextyAndSeventyNine: value.yearsInSextyAndSeventyNine,
        womanServedByProtectiveMeasure: value.womanServedByProtectiveMeasure,
        femaleBreadWinner: value.femaleBreadWinner,
        singleParent: value.singleParent,
        familyWithMoreThanFivePeople: value.familyWithMoreThanFivePeople,
        childUnderEighteen: value.childUnderEighteen,
        headOfHouseholdWithoutIncome: value.headOfHouseholdWithoutIncome,
        benefitOfContinuedProvision: value.benefitOfContinuedProvision,
        familyPurse: value.familyPurse,
        involuntaryCohabitation: value.involuntaryCohabitation,
        familyIncomeOfUpTwoMinimumWages: value.familyIncomeOfUpTwoMinimumWages
      }

    };
    for (let i = 0; value.members.length > i; i++) {
      value.members[i].birthday =  dateToSeconds(value.members[i].birthday);
      this.form.members.push(value.members[i]);
    }

   // console.log(this.form)

    if (this.formLoading === false) {
      this.formLoading = true;

      this.httpService.post('Family/RegisterWeb', this.form)
        .pipe(takeUntil(this.onDestroy))
        .subscribe((response: any) => {
          this.megaleiosAlertService.success(response.message);
          this.router.navigate(['Family/LoadData'], { relativeTo: this.activatedRoute.parent });
        }, (response: any) => {
          this.megaleiosAlertService.error(response.message);
          this.formLoading = false;
        });
    }
  }


}
