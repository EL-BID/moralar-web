import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DateTime } from 'luxon';
import { FormComponentClass } from 'src/app/utils/classes/form-component.class';

@Component({
  selector: 'app-reschedule-form',
  templateUrl: './reschedule-form.component.html',
  styleUrls: ['./reschedule-form.component.sass']
})
export class RescheduleFormComponent extends FormComponentClass {

  dayMin = DateTime.local()
    .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
    .toSeconds();

  constructor(
    formBuilder: FormBuilder
  ) {
    super();
    this.form = formBuilder.group({
      date: [null, Validators.required]
    });
  }

}
