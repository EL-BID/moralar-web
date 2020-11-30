import { OnDestroyClass } from './on-destroy.class';
import { OnChanges, OnInit, Input, Output, EventEmitter, SimpleChanges, Directive } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Directive()
export abstract class ListSearchComponentClass extends OnDestroyClass implements OnChanges, OnInit {

  listSearchForm: FormGroup;

  @Input()
  listSearchData: any;

  @Output()
  listSearchChange: EventEmitter<any> = new EventEmitter();

  ngOnChanges(simpleChanges: SimpleChanges): void {
    if (simpleChanges && simpleChanges.listSearchData && simpleChanges.listSearchData.firstChange) {
      this.listSearchForm.patchValue(this.listSearchData);
    }
  }

  ngOnInit(): void {
    this.listSearchForm.valueChanges
      .pipe(takeUntil(this.onDestroy), debounceTime(250), distinctUntilChanged())
      .subscribe((value) => this.listSearchChange.emit(value));
  }

}
