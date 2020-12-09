import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DateTime } from 'luxon';
import { FormComponentClass } from 'src/app/utils/classes/form-component.class';
import { trimWhiteSpace } from 'src/app/utils/functions/validators.function';
import { SCHEDULE_TYPE_LIST } from 'src/app/utils/interfaces/schedules.interface';

@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.sass']
})
export class ScheduleFormComponent extends FormComponentClass {

  dayMin = DateTime.local()
    .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
    .toSeconds();

  startDateList: any[] = [];
  scheduleTypeList: any[] = SCHEDULE_TYPE_LIST;

  constructor(
    formBuilder: FormBuilder
  ) {
    super();
    this.form = formBuilder.group({
      date: [null, Validators.required],
      startDate: [{ value: null, disabled: true }, Validators.required],
      subject: [null, Validators.required],
      place: [null, Validators.compose([trimWhiteSpace, Validators.required])],
      description: [null, Validators.required],
    });
  }

}
