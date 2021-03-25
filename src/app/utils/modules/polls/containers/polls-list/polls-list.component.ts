import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListContainerClass } from 'src/app/utils/classes/list-container.class';
import { FormDataModel } from 'src/app/utils/functions/generate-form-data.function';
import { HttpService } from 'src/app/utils/services/http/http.service';

@Component({
  selector: 'app-polls-list',
  templateUrl: './polls-list.component.html',
  styleUrls: ['./polls-list.component.sass']
})
export class PollsListComponent extends ListContainerClass {

  formDataModel: FormDataModel = {
    columns: [
      { data: 'title', name: 'Title', searchable: true }
    ],
    page: 1,
    pageSize: 10,
    search: {
      search: '',
      number: '',
      holderName: '',
      holderCpf: '',
      status: '',
      typeQuiz: 1
    },
    order: {
      column: '0',
      direction: 'asc'
    }
  };

  uri = 'Quiz';

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
