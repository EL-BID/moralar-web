import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { OnDestroyClass } from 'src/app/utils/classes/on-destroy.class';
import { HttpService } from 'src/app/utils/services/http/http.service';

@Component({
  selector: 'app-matchs-details',
  templateUrl: './matchs-details.component.html',
  styleUrls: ['./matchs-details.component.sass']
})
export class MatchsDetailsComponent extends OnDestroyClass implements OnInit {

  property: any = { };

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) {
    super();
  }

  ngOnInit(): void {
    this.httpService.get(`ResidencialProperty/Detail/${this.activatedRoute.snapshot.paramMap.get('propertyId')}`)
      .pipe(takeUntil(this.onDestroy))
      .subscribe((response: any) => this.property = response.data);
  }

}
