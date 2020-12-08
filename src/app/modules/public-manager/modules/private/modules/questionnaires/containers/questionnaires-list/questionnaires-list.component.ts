import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListContainerClass } from 'src/app/utils/classes/list-container.class';
import { FormDataModel } from 'src/app/utils/functions/generate-form-data.function';
import { HttpService } from 'src/app/utils/services/http/http.service';

@Component({
  selector: 'app-questionnaires-list',
  templateUrl: './questionnaires-list.component.html',
  styleUrls: ['./questionnaires-list.component.sass']
})
export class QuestionnairesListComponent extends ListContainerClass {

  formDataModel: FormDataModel = {
    columns: [
      { data: 'title', name: 'Title', searchable: true }
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

  uri = 'Questionnaire';

  constructor(
    activatedRoute: ActivatedRoute,
    router: Router,
    httpService: HttpService
  ) {
    super(activatedRoute, router, httpService);
  }

  handleDetails(): void {
    this._router.navigate(['/administrador/app/questionarios', this.listSelected[0].id]);
  }

}
