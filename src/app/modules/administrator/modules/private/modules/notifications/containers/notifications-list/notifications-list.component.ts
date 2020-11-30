import { Component } from '@angular/core';
import { ListContainerClass } from 'src/app/utils/classes/list-container.class';
import { FormDataModel } from 'src/app/utils/functions/generate-form-data.function';
import { HttpService } from 'src/app/utils/services/http/http.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MegaleiosAlertService } from 'src/app/utils/modules/megaleios-alert/megaleios-alert.service';
import { takeUntil } from 'rxjs/operators';
import { NotificationFormComponent } from '../../components/notification-form/notification-form.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-notifications-list',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.sass']
})
export class NotificationsListComponent extends ListContainerClass {

  formDataModel: FormDataModel = {
    columns: [
      { data: 'fullName', name: 'FullName', searchable: true },
      { data: 'email', name: 'Email', searchable: true }
    ],
    page: 1,
    pageSize: 10,
    search: {
      search: ''
    },
    order: {
      column: '0',
      direction: 'asc'
    }
  };

  uri = 'Profile';

  constructor(
    activatedRoute: ActivatedRoute,
    router: Router,
    httpService: HttpService,
    private ngbModal: NgbModal,
    private megaleiosAlertService: MegaleiosAlertService
  ) {
    super(activatedRoute, router, httpService);
  }

  openModalNotificationForm(): void {
    const modalRef = this.ngbModal.open(NotificationFormComponent, { size: 'lg', centered: true });
    modalRef.componentInstance.formSubmit
      .pipe(takeUntil(this.onDestroy))
      .subscribe((value: any) => {
        value.targets = this.listSelected;
        this._httpService.post('Notification/SendNotification', value)
          .pipe(takeUntil(this.onDestroy))
          .subscribe((response: any) => {
            this.listSelected = [];
            this.megaleiosAlertService.success(response.message);
            modalRef.close();
          }, (response: any) => {
            this.megaleiosAlertService.error(response.message);
            modalRef.componentInstance.notificationForm.enable();
          });
      });
  }

}
