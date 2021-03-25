import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SCHEDULE_STATUS_LIST, SCHEDULE_TYPE_LIST} from '../../../../../../../../utils/interfaces/schedules.interface';
import { sortBy } from 'lodash';
import {dateAndTimeToString} from '../../../../../../../../utils/functions/date.function';
@Component({
  selector: 'app-schedule-view',
  templateUrl: './schedule-view.component.html',
  styleUrls: ['./schedule-view.component.sass']
})
export class ScheduleViewComponent implements OnInit{
  scheduleStatusList: any[] = sortBy(SCHEDULE_STATUS_LIST, 'id');
  scheduleTypeList: any[] = sortBy(SCHEDULE_TYPE_LIST, 'id');
  @Input()
  schedule: any;

  data: any;

  @Output()
  reschedule: EventEmitter<void> = new EventEmitter();

  constructor() {

  }

  ngOnInit(): void {
    this.data = dateAndTimeToString(+this.schedule.date);
  }

}
