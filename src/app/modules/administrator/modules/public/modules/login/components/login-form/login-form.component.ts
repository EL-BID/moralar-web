import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormComponentClass } from 'src/app/utils/classes/form-component.class';
import { trimWhiteSpace } from 'src/app/utils/functions/validators.function';
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
    const email = environment.showDefaultLogin ? 'megaleios@megaleios.com' : null;
    const password = environment.showDefaultLogin ? 'megaleios' : null;
    this.form = formBuilder.group({
      email: ['megaleios@megaleios.com', Validators.compose([trimWhiteSpace, Validators.required, Validators.email])],
      password: ['megaleios', Validators.compose([trimWhiteSpace, Validators.required])],
      rememberMe: [false]
    });
  }

}
