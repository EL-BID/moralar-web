import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/utils/services/http/http.service';
import { ListContainerClass } from 'src/app/utils/classes/list-container.class';
import { FormDataModel } from 'src/app/utils/functions/generate-form-data.function';

@Component({
  selector: 'app-availables-list',
  templateUrl: './availables-list.component.html',
  styleUrls: ['./availables-list.component.sass']
})
export class AvailablesListComponent extends ListContainerClass {
  formDataModel: FormDataModel = {
    columns: [
      { data: 'created', name: 'Created', searchable: true },
      { data: 'holderCpf', name: 'HolderCpf', searchable: true },
      { data: 'holderName', name: 'HolderName', searchable: true },
      { data: 'holderNumber', name: 'HolderNumber', searchable: true },
      { data: 'status', name: 'Status', searchable: true },
      { data: 'title', name: 'Title', searchable: true },
    ],
    page: 1,
    pageSize: 10,
    search: {
      search: '',
      number: '',
      holderName: '',
      holderCpf: '',
      status: ''
    },
    order: {
      column: '0',
      direction: 'asc'
    }
  };

  uriCustom = 'QuizFamily/LoadDataQuizAvailable';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    httpService: HttpService
  ) {
    super(activatedRoute, router, httpService);
  }

  handleDetails(): void {
    this.router.navigate([this.listSelected[0].id], { relativeTo: this.activatedRoute });
  }

}
