import { Component } from '@angular/core';
import { ListComponentClass } from 'src/app/utils/classes/list-component.class';
import { sortBy } from 'lodash';
import {SCHEDULE_STATUS_LIST} from '../../../../../../../../utils/interfaces/schedules.interface';
@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.sass']
})
export class ScheduleListComponent extends ListComponentClass {
  scheduleStatusList: any[] = sortBy(SCHEDULE_STATUS_LIST, 'name');
}
