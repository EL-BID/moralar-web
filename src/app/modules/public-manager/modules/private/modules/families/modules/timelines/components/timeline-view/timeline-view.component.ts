import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpService} from '../../../../../../../../../../utils/services/http/http.service';
import {takeUntil} from 'rxjs/operators';
import {dateToString} from '../../../../../../../../../../utils/functions/date.function';
import {OnDestroyClass} from '../../../../../../../../../../utils/classes/on-destroy.class';
import {SCHEDULE_TYPE_LIST, SCHEDULE_STATUS_LIST} from '../../../../../../../../../../utils/interfaces/schedules.interface';
import {TIMELINE_STATUS_LIST} from '../../../../../../../../../../utils/interfaces/timelines.interface';

@Component({
  selector: 'app-timeline-view',
  templateUrl: './timeline-view.component.html',
  styleUrls: ['./timeline-view.component.sass']
})
export class TimelineViewComponent extends OnDestroyClass implements OnInit {
  timeLineStatusList: any[] = TIMELINE_STATUS_LIST;
  scheduleTypeList: any[] = SCHEDULE_TYPE_LIST;
  listQuizByFamily: any[];
  listCourseByFamily: any[];
  listSurveyByFamily: any[];
  situation: any;
  tabSelected: any;
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
        this.stage = response.data.data;
        for (let i = 0; this.stage.length > i; i++) {
          this.stage[i].date =  dateToString(this.stage[i].date);
        }
        this.situation = this.scheduleTypeList[response.data.schedule.typeSubject].name;
        this.tabSelected = this.stage[0];

        if (response.data.data.length) {
          let porc = (2 * 100) / response.data.data.length;
          document.getElementById('progBar').style.width = '' + porc + '%';
        }
      });
  }

  ngOnInit(): void {
   // this.getListQuizByFamily();
   // this.getListCourseByFamily();
   // this.getListSurveyByFamily();
  }


  activateClass(item){
    let i: number;
    for (i = 0; i < document.getElementsByClassName('nav-link active').length; i++) {
      document.getElementsByClassName('nav-link active')[i].className = 'nav-link';
    }
    item.target.className = 'nav-link active';
  }

  getListQuizByFamily() {
    this.httpService.get(`Quiz/LoadData/${this.activatedRoute.snapshot.paramMap.get('familyId')}`)
      .pipe(takeUntil(this.onDestroy))
      .subscribe((response: any) => {
        this.listQuizByFamily = response.data;
      });
  }
    getListCourseByFamily() {
    this.httpService.get(`Course/LoadData/${this.activatedRoute.snapshot.paramMap.get('familyId')}`)
      .pipe(takeUntil(this.onDestroy))
      .subscribe((response: any) => {
        this.listCourseByFamily = response.data;
      });
  }
    getListSurveyByFamily() {
    this.httpService.get(`Quiz/LoadData/${this.activatedRoute.snapshot.paramMap.get('familyId')}`)
      .pipe(takeUntil(this.onDestroy))
      .subscribe((response: any) => {
        this.listSurveyByFamily = response.data;
      });
  }

}

