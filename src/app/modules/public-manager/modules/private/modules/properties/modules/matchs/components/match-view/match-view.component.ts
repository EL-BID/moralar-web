import { Component, Input } from '@angular/core';
import { propertyTypeToString, propertyRegularizationToString, propertyGasInstallationToString } from 'src/app/utils/functions/properties.function';


@Component({
  selector: 'app-match-view',
  templateUrl: './match-view.component.html',
  styleUrls: ['./match-view.component.sass']
})
export class MatchViewComponent {

  genderList: any[]; // = GENDER_LIST;
  @Input()
  property: any;

  propertyTypeToString = propertyTypeToString;
  propertyRegularizationToString = propertyRegularizationToString;
  propertyGasInstallationToString = propertyGasInstallationToString;

}
