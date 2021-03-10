import { Component, EventEmitter, Input, Output } from '@angular/core';
import {SCHEDULE_STATUS_LIST, SCHEDULE_TYPE_LIST} from '../../../../../../../../utils/interfaces/schedules.interface';
import { sortBy } from 'lodash';
@Component({
  selector: 'app-schedule-view',
  templateUrl: './schedule-view.component.html',
  styleUrls: ['./schedule-view.component.sass']
})
export class ScheduleViewComponent {
  scheduleStatusList: any[] = sortBy(SCHEDULE_STATUS_LIST, 'name');
  scheduleTypeList: any[] = sortBy(SCHEDULE_TYPE_LIST, 'name');
  @Input()
  schedule: any;

  @Output()
  reschedule: EventEmitter<void> = new EventEmitter();

}
