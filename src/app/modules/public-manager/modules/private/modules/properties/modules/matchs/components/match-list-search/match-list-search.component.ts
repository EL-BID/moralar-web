import { Component } from '@angular/core';
import { ListSearchComponentClass } from 'src/app/utils/classes/list-search-component.class';
import { FormBuilder } from '@angular/forms';
import { TIMELINE_STATUS_LIST } from 'src/app/utils/interfaces/timelines.interface';

@Component({
  selector: 'app-match-list-search',
  templateUrl: './match-list-search.component.html',
  styleUrls: ['./match-list-search.component.sass']
})
export class MatchListSearchComponent extends ListSearchComponentClass {

  timelineStatusList: any[] = TIMELINE_STATUS_LIST;

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
