import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpService} from '../../../../../../../../../../utils/services/http/http.service';
import {takeUntil} from 'rxjs/operators';
import {dateAndTimeToString, dateToString} from '../../../../../../../../../../utils/functions/date.function';
import {SCHEDULE_TYPE_LIST} from '../../../../../../../../../../utils/interfaces/schedules.interface';
import {TIMELINE_STATUS_LIST} from '../../../../../../../../../../utils/interfaces/timelines.interface';
import {ListContainerClass} from '../../../../../../../../../../utils/classes/list-container.class';
import {ModalConfirmData} from '../../../../../../../../../../utils/modules/shared/components/modal-confirm/modal-confirm.interface';
import {ModalConfirmComponent} from '../../../../../../../../../../utils/modules/shared/components/modal-confirm/modal-confirm.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MegaleiosAlertService} from '../../../../../../../../../../utils/modules/megaleios-alert/megaleios-alert.service';

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
            this.stage[i].children[size].created = dateAndTimeToString(this.stage[i].children[size].created);
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
            this.stage[i].created = dateAndTimeToString(this.stage[i].created);
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
      place: 'Mudança',
      description: 'Mudança',
      date: value.date
    };
    let modalConfirmData: ModalConfirmData;

    modalConfirmData = {
      title: 'Confirmar mudança',
      content: 'Deseja realmente confirmar mudança?',
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
    this.router.navigate(['/gestor-publico/app/familias/', this.family.id]);
  }
}

