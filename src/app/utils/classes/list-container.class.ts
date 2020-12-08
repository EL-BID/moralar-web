import { OnInit, Directive } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { HttpService } from 'src/app/utils/services/http/http.service';
import { FormDataModel, generateFormData } from '../functions/generate-form-data.function';
import { OnDestroyClass } from './on-destroy.class';

@Directive()
export abstract class ListContainerClass extends OnDestroyClass implements OnInit {

  formDataModel: FormDataModel;
  uri: string;

  list: any[] = [];
  listSize: number;
  listSizeFiltered: number;
  listSelected: any[] = [];

  constructor(
    protected _activatedRoute: ActivatedRoute,
    protected _router: Router,
    protected _httpService: HttpService
  ) {
    super();
  }

  ngOnInit(): void {
    this._activatedRoute.queryParams
      .subscribe((params: Params) => {
        this.formDataModel.search.search = params.search !== undefined ? params.search : this.formDataModel.search.search;
        this.formDataModel.search.number = params.number !== undefined ? params.number : this.formDataModel.search.number;
        this.formDataModel.search.holderName = params.holderName !== undefined ? params.holderName : this.formDataModel.search.holderName;
        this.formDataModel.search.holderCpf = params.holderCpf !== undefined ? params.holderCpf : this.formDataModel.search.holderCpf;
        this.formDataModel.search.status = params.status !== undefined ? params.status : this.formDataModel.search.status;
        this.formDataModel.order.column = params.column !== undefined ? params.column : this.formDataModel.order.column;
        this.formDataModel.order.direction = params.direction !== undefined ? params.direction : this.formDataModel.order.direction;
        this.formDataModel.page = params.page !== undefined ? parseFloat(params.page) : this.formDataModel.page;
        this.formDataModel.pageSize = params.pageSize !== undefined ? parseFloat(params.pageSize) : this.formDataModel.pageSize;
        this.getList();
      });
  }

  protected updateQueryParams(params: Params): void {
    this._router.navigate([], { relativeTo: this._activatedRoute, queryParams: params, queryParamsHandling: 'merge' });
  }

  handleListSearchChange(value: Params): void {
    this.listSelected = [];
    this.updateQueryParams(value);
  }

  handleListOrderChange(value: Params): void {
    this.updateQueryParams(value);
  }

  handleListPageChange(value: any): void {
    this.updateQueryParams(value);
  }

  handleListItemSelected(value: any) {
    let isSelectedIndex = -1;
    this.listSelected.forEach((item: any, index: number) => {
      if (item === value) {
        isSelectedIndex = index;
      }
    });
    isSelectedIndex === -1
      ? this.listSelected.push(value)
      : this.listSelected.splice(isSelectedIndex, 1);
  }

  getList(): void {
    this._httpService.post(`${this.uri}/LoadData`, generateFormData(this.formDataModel))
      .pipe(takeUntil(this.onDestroy))
      .subscribe((response: any) => {
        this.list = response.data;
        this.listSize = response.recordsTotal;
        this.listSizeFiltered = response.recordsFiltered;
      });
  }

}
