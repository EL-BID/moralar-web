import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormComponentClass } from 'src/app/utils/classes/form-component.class';
import { isCpfValid, trimWhiteSpace } from 'src/app/utils/functions/validators.function';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent extends FormComponentClass {

  constructor(
    formBuilder: FormBuilder,
    public changeDetectorRef: ChangeDetectorRef
  ) {
    super();
    const cpf = environment.showDefaultLogin ? '30634164015' : null;
    const password = environment.showDefaultLogin ? 'megaleios' : null;
    this.form = formBuilder.group({
      cpf: [cpf, Validators.compose([trimWhiteSpace, Validators.required, isCpfValid])],
      password: [password, Validators.compose([trimWhiteSpace, Validators.required])],
      rememberMe: [false]
    });
  }

}
