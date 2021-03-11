import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { OnDestroyClass } from 'src/app/utils/classes/on-destroy.class';
import { HttpService } from 'src/app/utils/services/http/http.service';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.sass']
})
export class CoursesDetailsComponent extends OnDestroyClass implements OnInit {

  course: any = { };

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) {
    super();
  }

  ngOnInit(): void {
    this.httpService.get(`Course/Detail/${this.activatedRoute.snapshot.paramMap.get('courseId')}`)
      .pipe(takeUntil(this.onDestroy))
      .subscribe((response: any) => this.course = response.data);
  }

}
