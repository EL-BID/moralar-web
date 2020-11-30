import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormComponentClass } from 'src/app/utils/classes/form-component.class';
import { trimWhiteSpace } from 'src/app/utils/functions/validators.function';

@Component({
  selector: 'app-notification-form',
  templateUrl: './notification-form.component.html',
  styleUrls: ['./notification-form.component.sass']
})
export class NotificationFormComponent extends FormComponentClass {

  constructor(
    formBuilder: FormBuilder,
    public ngbActiveModal: NgbActiveModal
  ) {
    super();
    this.form = formBuilder.group({
      title: [null, Validators.compose([trimWhiteSpace, Validators.required])],
      content: [null, Validators.required]
    });
  }

}
