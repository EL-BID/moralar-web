import { Component } from '@angular/core';
import { ListSearchComponentClass } from 'src/app/utils/classes/list-search-component.class';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-available-list-search',
  templateUrl: './available-list-search.component.html',
  styleUrls: ['./available-list-search.component.sass']
})
export class AvailableListSearchComponent extends ListSearchComponentClass {

  constructor(
    formBuilder: FormBuilder
  ) {
    super();
    this.listSearchForm = formBuilder.group({
      search: [''],
      number: [''],
      holderName: [''],
      holderCpf: [''],
      status: ['']
    });
  }

}
