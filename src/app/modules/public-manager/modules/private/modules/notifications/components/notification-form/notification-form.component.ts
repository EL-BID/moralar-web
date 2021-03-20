import { ChangeDetectorRef, Component } from '@angular/core';
import { FormComponentClass } from 'src/app/utils/classes/form-component.class';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { trimWhiteSpace } from 'src/app/utils/functions/validators.function';
import {sortBy} from 'lodash';
import {DateTime} from 'luxon';
@Component({
  selector: 'app-notification-form',
  templateUrl: './notification-form.component.html',
  styleUrls: ['./notification-form.component.sass']
})
export class NotificationFormComponent extends FormComponentClass {
  numberOfVacanciesList: any[] = new Array(21);
  dayMin = DateTime.local()
    .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
    .toSeconds();
  constructor(
    private formBuilder: FormBuilder,
    public changeDetectorRef: ChangeDetectorRef
  ) {
    super();
    this.form = this.formBuilder.group({
      image: [null, Validators.required],
      datePublish: [null, Validators.required],
      description: [null, Validators.required],
    });
  }

}
