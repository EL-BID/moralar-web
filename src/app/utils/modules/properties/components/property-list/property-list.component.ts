import { Component } from '@angular/core';
import { ListComponentClass } from 'src/app/utils/classes/list-component.class';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.sass']
})
export class PropertyListComponent extends ListComponentClass { }
