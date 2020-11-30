import { Component, OnInit } from '@angular/core';
import { OnDestroyClass } from 'src/app/utils/classes/on-destroy.class';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/utils/services/http/http.service';
import { MegaleiosAlertService } from 'src/app/utils/modules/megaleios-alert/megaleios-alert.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-families-details',
  templateUrl: './families-details.component.html',
  styleUrls: ['./families-details.component.sass']
})
export class FamiliesDetailsComponent extends OnDestroyClass implements OnInit {

  family: any;
  formLoading = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService,
    private megaleiosAlertService: MegaleiosAlertService,
    private router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.httpService.get(`Family/Detail/${this.activatedRoute.snapshot.paramMap.get('familyId')}`)
      .pipe(takeUntil(this.onDestroy))
      .subscribe((response: any) => this.family = response.data);
  }

  handleFormSubmit(value: any): void {
    if (this.formLoading === false) {
      this.formLoading = true;
      value.id = this.family.id;
      this.httpService.post('Family/Save', value)
        .pipe(takeUntil(this.onDestroy))
        .subscribe((response: any) => {
          this.megaleiosAlertService.success(response.success);
          this.router.navigate(['/administrador/app/familias']);
        }, (response: any) => {
          this.megaleiosAlertService.error(response.message);
          this.formLoading = false;
        });
    }
  }

}
