import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { OnDestroyClass } from 'src/app/utils/classes/on-destroy.class';
import { HttpService } from 'src/app/utils/services/http/http.service';

@Component({
  selector: 'app-videos-details',
  templateUrl: './videos-details.component.html',
  styleUrls: ['./videos-details.component.sass']
})
export class VideosDetailsComponent extends OnDestroyClass implements OnInit {

  video: any = { };

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) {
    super();
  }

  ngOnInit(): void {
    this.httpService.get(`Video/Detail/${this.activatedRoute.snapshot.paramMap.get('videoId')}`)
      .pipe(takeUntil(this.onDestroy))
      .subscribe((response: any) => this.video = response.data);
  }

}
