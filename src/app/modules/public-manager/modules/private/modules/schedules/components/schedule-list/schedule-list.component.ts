import { Component } from '@angular/core';
import { ListComponentClass } from 'src/app/utils/classes/list-component.class';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.sass']
})
export class ScheduleListComponent extends ListComponentClass { }
