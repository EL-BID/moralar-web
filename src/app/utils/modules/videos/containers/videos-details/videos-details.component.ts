import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { OnDestroyClass } from 'src/app/utils/classes/on-destroy.class';
import { HttpService } from 'src/app/utils/services/http/http.service';
import {MegaleiosAlertService} from '../../../megaleios-alert/megaleios-alert.service';
import {dateToSeconds} from '../../../../functions/date.function';

@Component({
  selector: 'app-videos-details',
  templateUrl: './videos-details.component.html',
  styleUrls: ['./videos-details.component.sass']
})
export class VideosDetailsComponent extends OnDestroyClass implements OnInit {
  formLoading = false;
  video: any = { };

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService,
    private megaleiosAlertService: MegaleiosAlertService,
    private router: Router
  ) {
    super();
  }

  ngOnInit(): void {
 //   this.httpService.get(`Video/Detail/${this.activatedRoute.snapshot.paramMap.get('videoId')}`)
 //     .pipe(takeUntil(this.onDestroy))
 //     .subscribe((response: any) => this.video = response.data);
  }

  handleFormSubmit(value: any): void {
    if (this.formLoading === false) {
      this.formLoading = true;
      for (let i = 0; value.members.length > i; i++) {
        value.members[i].birthday =  dateToSeconds(value.members[i].birthday);
      }
      this.httpService.post('Video/Edit', value)
        .pipe(takeUntil(this.onDestroy))
        .subscribe((response: any) => {
          this.megaleiosAlertService.success(response.success);
          this.router.navigate(['../'], { relativeTo: this.activatedRoute });
        }, (response: any) => {
          this.megaleiosAlertService.error(response.message);
          this.formLoading = false;
        });
    }
  }


}
