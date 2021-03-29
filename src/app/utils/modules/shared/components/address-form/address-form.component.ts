import { Component, OnChanges, OnInit, Input, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';
import { MegaleiosService } from 'src/app/utils/services/megaleios/megaleios.service';
import { MegaleiosAlertService } from 'src/app/utils/modules/megaleios-alert/megaleios-alert.service';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.sass']
})
export class AddressFormComponent implements OnChanges, OnInit {

  @Input()
  form: FormGroup;

  stateList: any[] = [];
  cityList: any[] = [];

  constructor(
    private megaleiosService: MegaleiosService,
    private megaleiosAlertService: MegaleiosAlertService
  ) { }

  private enableCity(): void {
    this.form.controls.cityId.reset();
    this.form.controls.cityName.reset();
    this.form.controls.cityId.enable();
    this.form.controls.cityName.enable();
  }

  private disableCity(): void {
    this.form.controls.cityId.reset();
    this.form.controls.cityName.reset();
    this.form.controls.cityId.disable();
    this.form.controls.cityName.disable();
  }

  ngOnChanges({ form }: SimpleChanges): void {
    if (form.currentValue && form.isFirstChange()) {
      const stateId = form.currentValue.controls.stateId.value;
      if (stateId !== null) {
        this.megaleiosService.get(`City/${stateId}`)
          .subscribe((response: any) => {
            this.cityList = response.data;
          }, (response: any) => {
            this.megaleiosAlertService.error(response.message);
          });
      }
    }
  }

  ngOnInit(): void {

    this.megaleiosService.get('City/ListState')
      .subscribe((response: any) => {
        this.stateList = response.data;
      }, (response: any) => {
        this.megaleiosAlertService.error(response.message);
      });

    this.form.controls.cep.valueChanges
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((cep: null | string) => {
        if (this.form.controls.cep.valid) {
          this.megaleiosService.get(`City/GetInfoFromZipCode/${cep}`)
            .pipe(
              map((response: any) => {
                delete response.data.cep;
                delete response.data.number;
                delete response.data.complement;
                return response;
              })
            )
            .subscribe((responseOne: any) => {
              this.megaleiosService.get(`City/${responseOne.data.stateId}`)
              .subscribe((responseTwo: any) => {
                this.enableCity();
                this.cityList = responseTwo.data;
                this.form.patchValue(responseOne.data, { emitEvent: false });
              }, (responseTwo: any) => {
                this.megaleiosAlertService.error(responseTwo.message);
              });
            }, (responseOne: any) => {
              this.megaleiosAlertService.error(responseOne.message);
            });
        }
      });

    this.form.controls.stateId.valueChanges
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((stateId: null | string) => {
        this.form.controls.cityId.reset();
        this.form.controls.cityName.reset();
        if (stateId !== null) {
          const state = this.stateList.filter((item: any) => item.id === stateId)[0];
          this.form.controls.stateName.setValue(state.name);
          this.megaleiosService.get(`City/${stateId}`)
            .subscribe((response: any) => {
              this.enableCity();
              this.cityList = response.data;
            }, (response: any) => {
              this.megaleiosAlertService.error(response.message);
            });
        } else {
          this.disableCity();
        }
      });

    this.form.controls.cityId.valueChanges
      .subscribe((cityId: null | string) => {
        if (cityId !== null && this.cityList.length) {
          const city = this.cityList.filter((item: any) => item.id === cityId)[0];
          this.form.controls.cityName.setValue(city.name);
        } else {
          this.form.controls.cityName.setValue(null);
        }
      });

  }

}
