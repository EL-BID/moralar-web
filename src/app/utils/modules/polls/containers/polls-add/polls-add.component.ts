import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { OnDestroyClass } from 'src/app/utils/classes/on-destroy.class';
import { MegaleiosAlertService } from 'src/app/utils/modules/megaleios-alert/megaleios-alert.service';
import { HttpService } from 'src/app/utils/services/http/http.service';

@Component({
  selector: 'app-polls-add',
  templateUrl: './polls-add.component.html',
  styleUrls: ['./polls-add.component.sass']
})
export class PollsAddComponent extends OnDestroyClass {

  formLoading = false;

  constructor(
    private httpService: HttpService,
    private megaleiosAlertService: MegaleiosAlertService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    super();
  }

  handleFormSubmit(value: any): void {
    if (this.formLoading === false) {
      this.formLoading = true;
      this.httpService.post('Quiz/Register', value)
        .pipe(takeUntil(this.onDestroy))
        .subscribe((response: any) => {
          this.megaleiosAlertService.success(response.message);
          this.router.navigate(['Quiz/LoadData'], { relativeTo: this.activatedRoute });
        }, (response: any) => {
          this.megaleiosAlertService.error(response.message);
          this.formLoading = false;
        });
    }
  }

}
