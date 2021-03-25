import {Component, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DateTime } from 'luxon';
import { FormComponentClass } from 'src/app/utils/classes/form-component.class';
import { SCHEDULE_TYPE_LIST } from 'src/app/utils/interfaces/schedules.interface';
import {trimWhiteSpace} from '../../../../../../../../utils/functions/validators.function';
import {dateAndTimeToString, dateToSeconds, dateToString} from '../../../../../../../../utils/functions/date.function';
@Component({
  selector: 'app-reschedule-form',
  templateUrl: './reschedule-form.component.html',
  styleUrls: ['./reschedule-form.component.sass']
})
export class RescheduleFormComponent extends FormComponentClass implements OnInit{
  scheduleTypeList: any[] = SCHEDULE_TYPE_LIST;
  dayMin = DateTime.local()
    .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
    .toSeconds();

  constructor(
    formBuilder: FormBuilder
  ) {
    super();
    this.form = formBuilder.group({
      date: [null, Validators.required],
      familyId: [null],
      typeSubject: [null, Validators.required],
      place: [null, Validators.compose([trimWhiteSpace, Validators.required])],
      description: [null, Validators.required],
      time: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.form.controls.time.setValue(dateAndTimeToString(+this.form.controls.date.value).substr(-5, 5));
    this.form.controls.date.setValue(dateToSeconds(dateToString(+this.form.controls.date.value)));
  }

}
