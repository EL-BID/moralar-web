import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FormComponentClass } from 'src/app/utils/classes/form-component.class';
import { trimWhiteSpace } from 'src/app/utils/functions/validators.function';
import {QUESTIONANSWER_TYPES_LIST} from 'src/app/utils/interfaces/questionnaires.interface';
import {FormDataModel, generateFormData} from '../../../../../../functions/generate-form-data.function';
import {takeUntil} from 'rxjs/operators';
import {HttpService} from '../../../../../../services/http/http.service';
import {ActivatedRoute, Params} from '@angular/router';



@Component({
  selector: 'app-release-form',
  templateUrl: './release-form.component.html',
  styleUrls: ['./release-form.component.sass']
})

export class ReleaseFormComponent extends FormComponentClass implements OnInit{
  listFamilySelected: any;
  listQuiz: any;

  formDataModel: FormDataModel = {
    columns: [
      { data: 'id',    name: 'Id',    searchable: true },
      { data: 'title', name: 'Title', searchable: true }
    ],
    page: 1,
    pageSize: 10,
    search: {
      search: '',
      typeQuiz: 0
    },
    order: {
      column: '0',
      direction: 'asc'
    }
  };

  constructor(
    private httpService: HttpService,
    protected activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    super();
    this.form = this.formBuilder.group({
      quizId: [null, Validators.required],
      allFamily: 'false',
      familyId: this.formBuilder.array([])

    });
  }

  ngOnInit(): void {
    this.getListQuiz();
  }

  public addFamiliesSelected(e) {
    this.form.value.familyId = e;
  }


  getListQuiz(): void {
    this.httpService.post(`Quiz/LoadData`, generateFormData(this.formDataModel))
      .pipe(takeUntil(this.onDestroy))
      .subscribe((response: any) => {
        this.listQuiz = response.data;
      });
  }


}
