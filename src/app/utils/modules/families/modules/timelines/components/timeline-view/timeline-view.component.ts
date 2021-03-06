import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpService} from '../../../../../../services/http/http.service';
import {takeUntil} from 'rxjs/operators';
import {dateAndTimeToString, dateToString} from '../../../../../../functions/date.function';
import {SCHEDULE_TYPE_LIST} from '../../../../../../interfaces/schedules.interface';
import {TIMELINE_STATUS_LIST} from '../../../../../../interfaces/timelines.interface';
import {ModalConfirmData} from '../../../../../shared/components/modal-confirm/modal-confirm.interface';
import {ModalConfirmComponent} from '../../../../../shared/components/modal-confirm/modal-confirm.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MegaleiosAlertService} from '../../../../../megaleios-alert/megaleios-alert.service';
import {ListContainerClass} from '../../../../../../classes/list-container.class';

@Component({
  selector: 'app-timeline-view',
  templateUrl: './timeline-view.component.html',
  styleUrls: ['./timeline-view.component.sass']
})
export class TimelineViewComponent extends ListContainerClass implements OnInit {
  timeLineStatusList: any[] = TIMELINE_STATUS_LIST;
  scheduleTypeList: any[] = SCHEDULE_TYPE_LIST;
  listQuizByFamily: any[];
  listPropertiesInterest: any[];
  listCourseByFamily: any[];
  listPollsByFamily: any[];
  listSchedulesByFamily: any[];
  typeSubjectCurrent: any;
  tabSelected: any;
  stage: any[];
  listSchedulesHistory: any[];
  @Input()
  family: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService,
    private ngbModal: NgbModal,
    private megaleiosAlertService: MegaleiosAlertService,
    private router: Router
  ) {
    // @ts-ignore
    super();
    this.httpService.get(`Family/TimeLineProcessMandatory/${this.activatedRoute.snapshot.paramMap.get('familyId')}`)
      .subscribe((response: any) => {
        let indexCurrent = 1;
        this.typeSubjectCurrent = response.data.schedule.typeSubject;
        this.stage = response.data.data;
        for (let i = 0; this.stage.length > i; i++) {
          if (this.stage[i].children.length > 0) {
            let size;
            size = this.stage[i].children.length - 1;
            this.stage[i].children[size].date = dateAndTimeToString(this.stage[i].children[size].date);
            // checking stages
            switch (this.stage[i].children[size].typeScheduleStatus) {
              case 0:
                if (this.stage[i].children[size].typeSubject === this.typeSubjectCurrent) {
                  // current
                  indexCurrent = i;
                  this.tabSelected = this.stage[i].children[size];
                  this.stage[i].stageSituation = 'active';
                } else {
                  // pending
                  this.stage[i].stageSituation = 'disabled';
                }
                break;
              case 4:
                if (this.stage[i].children[size].typeSubject === this.typeSubjectCurrent) {
                  // current
                  indexCurrent = i;
                  this.tabSelected = this.stage[i].children[size];
                  this.stage[i].stageSituation = 'active';
                } else {
                  this.stage[i].stageSituation = '';
                }
                break;
            }

          } else {
            this.stage[i].date = dateAndTimeToString(this.stage[i].date);
            // checking stages
            switch (this.stage[i].typeScheduleStatus) {
              case 0:
                if (this.stage[i].typeSubject === this.typeSubjectCurrent) {
                  // current
                  indexCurrent = i;
                  this.tabSelected = this.stage[i];
                  this.stage[i].stageSituation = 'active';
                } else {
                  // pending
                  this.stage[i].stageSituation = 'disabled';
                }
                break;
              case 4:
                // completed
                if (this.stage[i].typeSubject === this.typeSubjectCurrent) {
                  // current
                  indexCurrent = i;
                  this.tabSelected = this.stage[i];
                  this.stage[i].stageSituation = 'active';
                } else {
                  // pending
                  this.stage[i].stageSituation = '';
                }
                break;
            }
          }
        }

        if (response.data.data.length) {
          let porc;
          porc = ((indexCurrent + 1) / response.data.data.length) * 100;
          document.getElementById('progBar').style.width = `${porc}%`;
          // document.getElementById('progBar').innerHTML = `${porc}%`;
        }
        this.getObjs(this.typeSubjectCurrent);
      });
  }

  ngOnInit() {
  }

  getObjs(current) {
    let link;
    switch (current) {
      case 2:
        link = `Schedule/DetailTimeLineProcessReunionPGM/${this.activatedRoute.snapshot.paramMap.get('familyId')}`;
        break;
      case 4:
        link = `Schedule/DetailTimeLineProcessChooseProperty/${this.activatedRoute.snapshot.paramMap.get('familyId')}`;
        break;
      case 7:
      case 8:
        link = `Schedule/DetailTimeLineProcessChoosePropertyOneAndTwo/${this.activatedRoute.snapshot.paramMap.get('familyId')}/${current}`;
        this.httpService.get(`Schedule/GetHistoryByFamily/${this.activatedRoute.snapshot.paramMap.get('familyId')}`)
          .subscribe((response: any) => {
            this.listSchedulesHistory = response.data;
            for (let i = 0; response.data.length > i; i++) {
              this.listSchedulesHistory[i].date = dateAndTimeToString(this.listSchedulesHistory[i].date);
            }
          });
        break;
    }
    this.httpService.get(link)
      .subscribe((response: any) => {
        this.listQuizByFamily = response.data.detailQuiz;
        this.listPropertiesInterest = response.data.interestResidencialProperty;
        this.listCourseByFamily = response.data.courses;
        for (let i = 0; response.data.courses.length > i; i++) {
          this.listCourseByFamily[i].startDate = dateAndTimeToString(this.listCourseByFamily[i].startDate);
          this.listCourseByFamily[i].endDate = dateAndTimeToString(this.listCourseByFamily[i].endDate);
        }
      });
  }

  activateClass(item) {
    let i: number;
    for (i = 0; i < document.getElementsByClassName('nav-link active').length; i++) {
      document.getElementsByClassName('nav-link active')[i].className = 'nav-link';
    }
    item.target.className = 'nav-link active';
  }

  loadInfoStage(i) {
    if (this.stage[i].children.length > 0) {
      this.tabSelected = this.stage[i].children;
      let size;
      size = this.stage[i].children.length - 1;
      this.tabSelected = this.stage[i].children[size];
     } else {
      this.tabSelected = this.stage[i];
    }
  }

  confirmChange(value: any): void {
    let post;
    post = {
      familyId: this.activatedRoute.snapshot.paramMap.get('familyId'),
      id: value.scheduleId,
      typeSubject: 8,
      place: 'Mudan??a',
      description: 'Mudan??a',
      date: value.date
    };
    let modalConfirmData: ModalConfirmData;

    modalConfirmData = {
      title: 'Confirmar mudan??a',
      content: 'Deseja realmente confirmar mudan??a?',
      action: 'confirmar',
    };

    const modalRef = this.ngbModal.open(ModalConfirmComponent, {centered: true});
    modalRef.componentInstance.modalConfirmData = modalConfirmData;
    modalRef.result
      .then((result: any) => {
        if (result) {
          this.httpService.post('Schedule/ChangeSubject', post)
            .subscribe((response: any) => {
              this.megaleiosAlertService.success(response.message);
              setTimeout(() => {
                location.reload();
              }, 1000);
            }, (response: any) => {
              this.megaleiosAlertService.error(response.message);
              setTimeout(() => {
                location.reload();
              }, 1000);
            });
        }
      })
      .catch(() => {
      });
  }

  handleDetails(): void {
  this.router.navigate([`/${this.activatedRoute.parent.root.children[0].snapshot.url[0].path}/app/familias/`, this.family.id]);
  }
}

