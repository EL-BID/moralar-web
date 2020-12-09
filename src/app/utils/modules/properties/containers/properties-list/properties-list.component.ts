import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListContainerClass } from 'src/app/utils/classes/list-container.class';
import { FormDataModel } from 'src/app/utils/functions/generate-form-data.function';
import { HttpService } from 'src/app/utils/services/http/http.service';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.sass']
})
export class PropertiesListComponent extends ListContainerClass {

  formDataModel: FormDataModel = {
    columns: [
      { data: 'code', name: 'code', searchable: true }
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

  uri = 'Property';

  constructor(
    activatedRoute: ActivatedRoute,
    router: Router,
    httpService: HttpService
  ) {
    super(activatedRoute, router, httpService);
  }

  handleDetails(): void {
    this._router.navigate(['/administrador/app/imoveis', this.listSelected[0].id]);
  }

}
