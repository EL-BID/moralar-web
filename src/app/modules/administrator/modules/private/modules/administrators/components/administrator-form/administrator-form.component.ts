import { Component } from '@angular/core';
import { FormComponentClass } from 'src/app/utils/classes/form-component.class';
import { FormBuilder, Validators } from '@angular/forms';
import { trimWhiteSpace } from 'src/app/utils/functions/validators.function';

@Component({
  selector: 'app-administrator-form',
  templateUrl: './administrator-form.component.html',
  styleUrls: ['./administrator-form.component.sass']
})
export class AdministratorFormComponent extends FormComponentClass {
  passwordCurrent;
  constructor(
    formBuilder: FormBuilder
  ) {
    super();
    const genericValidator = Validators.compose([trimWhiteSpace, Validators.required, Validators.minLength(6), Validators.maxLength(12)]);
    this.form = formBuilder.group({
      name: [null, Validators.compose([trimWhiteSpace, Validators.required])],
      email: [null, Validators.compose([trimWhiteSpace, Validators.required, Validators.email])],
      password: [null, genericValidator],
      passwordCurrent: [null],
      passwordConfirm: [null, Validators.compose([trimWhiteSpace, Validators.required])],
      passwordCurrentWritten: [null, trimWhiteSpace],
      id: [null],
    });

    this.passwordCurrent = this.form.controls.passwordCurrent;
  }

}
