import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-schedule-view',
  templateUrl: './schedule-view.component.html',
  styleUrls: ['./schedule-view.component.sass']
})
export class ScheduleViewComponent {

  @Input()
  schedule: any;

  @Output()
  reschedule: EventEmitter<void> = new EventEmitter();

}
