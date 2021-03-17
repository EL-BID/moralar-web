import { Component } from '@angular/core';
import { ListComponentClass } from 'src/app/utils/classes/list-component.class';

@Component({
  selector: 'app-available-list',
  templateUrl: './available-list.component.html',
  styleUrls: ['./available-list.component.sass']
})
export class AvailableListComponent extends ListComponentClass { }
