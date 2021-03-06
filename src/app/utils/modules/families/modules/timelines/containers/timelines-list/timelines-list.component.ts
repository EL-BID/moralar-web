import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/utils/services/http/http.service';
import { ListContainerClass } from 'src/app/utils/classes/list-container.class';
import { FormDataModel } from 'src/app/utils/functions/generate-form-data.function';

@Component({
  selector: 'app-timelines-list',
  templateUrl: './timelines-list.component.html',
  styleUrls: ['./timelines-list.component.sass']
})
export class TimelinesListComponent extends ListContainerClass {

  formDataModel: FormDataModel = {
    columns: [
      { data: 'number', name: 'Number', searchable: false },
      { data: 'holderName', name: 'HolderName', searchable: false },
      { data: 'holderCpf', name: 'HolderCpf', searchable: false },
      { data: 'typeSubject', name: 'TypeSubject', searchable: false }
    ],
    page: 1,
    pageSize: 10,
    search: {
      search: '',
      number: '',
      holderName: '',
      holderCpf: '',
      status: '',
      typeSubject:  2
    },
    order: {
      column: '0',
      direction: 'asc'
    }
  };

  uriCustom = 'Family/TimeLineLoadData';

  constructor(
    activatedRoute: ActivatedRoute,
    private router: Router,
    httpService: HttpService
  ) {
    super(activatedRoute, router, httpService);
  }

  handleDetails(): void {
    this.router.navigate([this.listSelected[0].id], { relativeTo: this._activatedRoute });
  }

}
