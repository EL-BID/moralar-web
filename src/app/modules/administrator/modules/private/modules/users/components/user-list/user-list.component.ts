import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ListComponentClass } from 'src/app/utils/classes/list-component.class';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent extends ListComponentClass {

  @Input()
  options: any;

  @Output()
  blockUnblock: EventEmitter<any> = new EventEmitter();

  handleBlockUnblock(value: any): void {
    value.preventDefault();
    this.blockUnblock.emit({
      targetId: value.target.value,
      block: !value.target.checked,
      reason: null
    });
  }

}
