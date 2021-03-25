import {Component, Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/utils/services/http/http.service';
import { ListContainerClass } from 'src/app/utils/classes/list-container.class';
import { FormDataModel } from 'src/app/utils/functions/generate-form-data.function';

@Component({
  selector: 'app-schedules-list',
  templateUrl: './schedules-list.component.html',
  styleUrls: ['./schedules-list.component.sass']
})
export class SchedulesListComponent extends ListContainerClass{
  @Input()
  list;
  formDataModel: FormDataModel = {
    columns: [
      { data: 'date',    name: 'Date',    searchable: true },
      { data: 'typeScheduleStatus', name: 'TypeScheduleStatus', searchable: true },
      { data: 'typeSubject',     name: 'TypeSubject',     searchable: true }
    ],
    page: 1,
    pageSize: 10,
    search: {
      search: '',
      number: '',
      holderName: '',
      holderCpf: '',
      status: '',
    },
    order: {
      column: '0',
      direction: 'asc'
    }
  };

  constructor(
    activatedRoute: ActivatedRoute,
    private router: Router,
    httpService: HttpService
  ) {
    super(activatedRoute, router, httpService);
  }

  handleDetails(): void {
    this.router.navigate(['/gestor-publico/app/agendamentos/', this.listSelected[0].scheduleId]);
  }

}
