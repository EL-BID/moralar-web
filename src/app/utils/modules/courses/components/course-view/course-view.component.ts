import { Component, Input } from '@angular/core';
import { propertyTypeToString, propertyRegularizationToString, propertyGasInstallationToString } from 'src/app/utils/functions/properties.function';
import {GENDER_LIST} from '../../../../interfaces/courses.interface';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.sass']
})
export class CourseViewComponent {

  genderList: any[] = GENDER_LIST;
  @Input()
  course: any;

  propertyTypeToString = propertyTypeToString;
  propertyRegularizationToString = propertyRegularizationToString;
  propertyGasInstallationToString = propertyGasInstallationToString;

}
