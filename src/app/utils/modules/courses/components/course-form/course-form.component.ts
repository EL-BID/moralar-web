import { ChangeDetectorRef, Component } from '@angular/core';
import { FormComponentClass } from 'src/app/utils/classes/form-component.class';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { trimWhiteSpace } from 'src/app/utils/functions/validators.function';
import {GENDER_LIST} from '../../../../interfaces/courses.interface';
import {sortBy} from 'lodash';
@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.sass']
})
export class CourseFormComponent extends FormComponentClass {
  genderList: any[] = sortBy(GENDER_LIST, 'name');
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
      startTargetAudienceAge: [null, Validators.required],
      endTargetAudienceAge: [null, Validators.required],
      typeGenre: [null, Validators.required],
      numberOfVacancies: [null, Validators.required],
    });
  }

}
