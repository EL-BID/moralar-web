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

  get membersForm(): FormArray {
    return this.form.controls.members as FormArray;
  }

  constructor(
    private formBuilder: FormBuilder
  ) {
    super();
    this.form = this.formBuilder.group({
      number: [null, Validators.compose([trimWhiteSpace, Validators.required])],
      holderName: [null, Validators.compose([trimWhiteSpace, Validators.required])],
      holderCpf: [null, Validators.compose([Validators.required, isCpfValid])],
      birthdate: [null, Validators.required],
      gender: [null],
      email: [null, Validators.compose([trimWhiteSpace, Validators.email])],
      phone: [null, trimWhiteSpace],
      schooling: [null, Validators.required],
      spouseName: [null, trimWhiteSpace],
      spouseBirthdate: [null],
      spouseGender: [null],
      spouseSchooling: [null],
      members: this.formBuilder.array([]),
      familyIncome: [null, Validators.required],
      propertyCurrentValue: [null, Validators.required],
      propertyBuyValue: [null, Validators.required],
      propertyIncrementValue: [null, Validators.required]
    });
  }

  private createMemberForm(): FormGroup {
    return this.formBuilder.group({
      name: [null, Validators.compose([trimWhiteSpace, Validators.required])],
      birthdate: [null, Validators.required],
      gender: [null, Validators.required],
      degreeOfKinship: [null, Validators.required],
      schooling: [null, Validators.required]
    });
  }

  addMemberForm(): void {
    this.membersForm.push(this.createMemberForm());
  }

  removeMemberForm(index: number): void {
    this.membersForm.removeAt(index);
  }

}
