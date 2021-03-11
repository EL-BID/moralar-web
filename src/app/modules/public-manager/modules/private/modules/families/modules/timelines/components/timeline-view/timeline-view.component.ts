import { Component, Input } from '@angular/core';
import { propertyTypeToString, propertyRegularizationToString, propertyGasInstallationToString } from 'src/app/utils/functions/properties.function';


@Component({
  selector: 'app-timeline-view',
  templateUrl: './timeline-view.component.html',
  styleUrls: ['./timeline-view.component.sass']
})
export class TimelineViewComponent {

  genderList: any[]; // = GENDER_LIST;
  @Input()
  family: any;

  propertyTypeToString = propertyTypeToString;
  propertyRegularizationToString = propertyRegularizationToString;
  propertyGasInstallationToString = propertyGasInstallationToString;

}
