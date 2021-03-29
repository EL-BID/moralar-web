import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { OnDestroyClass } from 'src/app/utils/classes/on-destroy.class';
import { HttpService } from 'src/app/utils/services/http/http.service';

@Component({
  selector: 'app-timelines-details',
  templateUrl: './timelines-details.component.html',
  styleUrls: ['./timelines-details.component.sass']
})
export class TimelinesDetailsComponent extends OnDestroyClass implements OnInit {

  family: any = { };

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) {
    super();
  }

  ngOnInit(): void {
    this.httpService.get(`Family/Detail/${this.activatedRoute.snapshot.paramMap.get('familyId')}`)
      .pipe(takeUntil(this.onDestroy))
      .subscribe((response: any) => this.family = response.data);
  }

}
