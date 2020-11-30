import { Component } from '@angular/core';
import { ListSearchComponentClass } from 'src/app/utils/classes/list-search-component.class';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-list-search',
  templateUrl: './user-list-search.component.html',
  styleUrls: ['./user-list-search.component.sass']
})
export class UserListSearchComponent extends ListSearchComponentClass {

  constructor(
    formBuilder: FormBuilder
  ) {
    super();
    this.listSearchForm = formBuilder.group({
      search: ['']
    });
  }

}
