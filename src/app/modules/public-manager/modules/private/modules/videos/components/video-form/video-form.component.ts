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
      title: [null, Validators.compose([trimWhiteSpace, Validators.required])],
      img: [null, Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      place: [null, Validators.required],
      schedule: [null, Validators.required],
      workLoad: [null, Validators.required],
      description: [null, Validators.required],
      targetAudienceAge: [null, Validators.required],
      typeGenre: [null, Validators.required],
      numberOfVacancies: [null, Validators.required],
    });
  }

}
