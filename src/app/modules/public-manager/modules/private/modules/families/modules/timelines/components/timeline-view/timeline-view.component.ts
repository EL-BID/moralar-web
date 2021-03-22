import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpService} from '../../../../../../../../../../utils/services/http/http.service';
import {takeUntil} from 'rxjs/operators';
import {dateToString} from '../../../../../../../../../../utils/functions/date.function';
import {OnDestroyClass} from '../../../../../../../../../../utils/classes/on-destroy.class';
import {SCHEDULE_TYPE_LIST, SCHEDULE_STATUS_LIST} from '../../../../../../../../../../utils/interfaces/schedules.interface';

@Component({
  selector: 'app-timeline-view',
  templateUrl: './timeline-view.component.html',
  styleUrls: ['./timeline-view.component.sass']
})
export class TimelineViewComponent extends OnDestroyClass implements OnInit {
  scheduleStatusList: any[] = SCHEDULE_STATUS_LIST;
  scheduleTypeList: any[] = SCHEDULE_TYPE_LIST;
  listQuizByFamily: any[];
  listCourseByFamily: any[];
  listSurveyByFamily: any[];
  tabSelected: any;
  classActive: any;
  stage: any[];
  @Input()
  family: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) {
    super();
    this.httpService.get(`Family/TimeLineProcessMandatory/${this.activatedRoute.snapshot.paramMap.get('familyId')}`)
      .pipe(takeUntil(this.onDestroy))
      .subscribe((response: any) => {
        this.stage = response.data;
        for (let i = 0; this.stage.length > i; i++) {
          this.stage[i].date =  dateToString(this.stage[i].date);
        }
        this.tabSelected = this.stage[0];
      });
  }

  ngOnInit(): void {  }


  activateClass(item){
    let i: number;
    for (i = 0; i < document.getElementsByClassName('nav-link active').length; i++) {
      document.getElementsByClassName('nav-link active')[i].className = 'nav-link';
    }
    item.target.className = 'nav-link active';
  }
}
