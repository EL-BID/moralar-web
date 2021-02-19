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
holderNumber: any;

  genderList: any[] = sortBy(GENDER_LIST, 'name');
  schoolingList: any[] = SCHOOLING_LIST;
  degreeOfKinshipList: any[] = DEGREE_OF_KINSHIP_LIST;

  get membersForm(): FormArray {
    return this.form.controls.members as FormArray;
  }

  constructor(
    private formBuilder: FormBuilder
  ) {
    super();
    this.form = this.formBuilder.group({
      holder: {
        number: [this.holderNumber, Validators.compose([trimWhiteSpace, Validators.required])],
        name: [null, Validators.compose([trimWhiteSpace, Validators.required])],
        cpf: [null, Validators.compose([trimWhiteSpace, Validators.required])],
        birthday: [null, Validators.compose([trimWhiteSpace, Validators.required])],
        genre: [null, Validators.compose([trimWhiteSpace, Validators.required])],
        email: [null, Validators.compose([trimWhiteSpace, Validators.email])],
        phone: [null, trimWhiteSpace],
        scholarity: [null, trimWhiteSpace],
      },
      spouse: {
        name: [null, Validators.compose([trimWhiteSpace, Validators.required])],
        birthday: [null, Validators.compose([trimWhiteSpace, Validators.required])],
        genre: [null, Validators.compose([trimWhiteSpace, Validators.required])],
        spouseScholarity: [null, Validators.compose([trimWhiteSpace, Validators.required])]
      },

      members: this.formBuilder.array([]),
      financial: {
        familyIncome: [null, Validators.required],
        propertyValueForDemolished: [null, Validators.required],
        maximumPurchase: [null, Validators.required],
        incrementValue: [null, Validators.required]
      }
    });
  }

  private createMemberForm(): FormGroup {
    return this.formBuilder.group({
      name: [null, Validators.compose([trimWhiteSpace, Validators.required])],
      birthdate: [null, Validators.required],
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
