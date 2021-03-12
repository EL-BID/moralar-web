import { ChangeDetectorRef, Component } from '@angular/core';
import { FormComponentClass } from 'src/app/utils/classes/form-component.class';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { trimWhiteSpace } from 'src/app/utils/functions/validators.function';
import {sortBy} from 'lodash';
@Component({
  selector: 'app-video-form',
  templateUrl: './video-form.component.html',
  styleUrls: ['./video-form.component.sass']
})
export class VideoFormComponent extends FormComponentClass {

  numberOfVacanciesList: any[] = new Array(21);
  constructor(
    private formBuilder: FormBuilder,
    public changeDetectorRef: ChangeDetectorRef
  ) {
    super();
    this.form = this.formBuilder.group({
      Title: [null, Validators.compose([trimWhiteSpace, Validators.required])],
      Thumbnail: [null, Validators.required],
      url: [null, Validators.required]
    });
  }

}
