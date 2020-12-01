import { ChangeDetectorRef, Component } from '@angular/core';
import { FormComponentClass } from 'src/app/utils/classes/form-component.class';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { trimWhiteSpace } from 'src/app/utils/functions/validators.function';
import { sortBy } from 'lodash';
import {
  PROPERTY_REGULARIZATION_LIST,
  PROPERTY_TYPE_GAS_INSTALLATION,
  PROPERTY_TYPE_LIST
} from 'src/app/utils/interfaces/properties.interface';

@Component({
  selector: 'app-property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.sass']
})
export class PropertyFormComponent extends FormComponentClass {

  propertyTypeList: any[] = sortBy(PROPERTY_TYPE_LIST, 'name');
  propertyNumberOfFloorsList: any[] = new Array(21);
  propertyLocationFloorList: any[] = new Array(21);
  propertyRegularizationList: any[] = sortBy(PROPERTY_REGULARIZATION_LIST, 'name');
  propertyGasInstallationList: any[] = sortBy(PROPERTY_TYPE_GAS_INSTALLATION, 'name');

  get photosForm(): FormArray {
    return this.form.controls.photos as FormArray;
  }

  constructor(
    private formBuilder: FormBuilder,
    public changeDetectorRef: ChangeDetectorRef
  ) {
    super();
    this.form = this.formBuilder.group({
      code: [null, Validators.compose([trimWhiteSpace, Validators.required])],
      photos: this.formBuilder.array([]),
      plan: [null, Validators.required],
      zipCode: [null, Validators.required],
      stateId: [null, Validators.required],
      stateName: [null, Validators.required],
      cityId: [null, Validators.required],
      cityName: [null, Validators.required],
      neighborhood: [null, Validators.compose([trimWhiteSpace, Validators.required])],
      streetAddress: [null, Validators.compose([trimWhiteSpace, Validators.required])],
      number: [null, Validators.compose([trimWhiteSpace, Validators.required])],
      complement: [null, trimWhiteSpace],
      value: [null, Validators.required],
      type: [null, Validators.required],
      squareFootage: [null, Validators.required],
      condominiumValue: [null],
      iptuValue: [null],
      neighborhoodLocation: [null, Validators.required],
      numberOfFloors: [null, Validators.required],
      locationFloor: [null, Validators.required],
      elevator: [null, Validators.required],
      numberOfBedrooms: [null, Validators.required],
      numberOfBathrooms: [null, Validators.required],
      serviceArea: [null, Validators.required],
      garage: [null, Validators.required],
      backyard: [null, Validators.required],
      cistern: [null, Validators.required],
      walled: [null, Validators.required],
      escapesAccess: [null, Validators.required],
      accessRamp: [null, Validators.required],
      adaptedAllowsAdaptationPcd: [null, Validators.required],
      propertyRegularization: [null, Validators.required],
      typeGasInstallation: [null, Validators.required]
    });
  }

  private createPhotoFormControl(): FormControl {
    return this.formBuilder.control(null, Validators.required);
  }

  canAddPhotoFormControl(): boolean {
    return this.photosForm.controls.length < 15;
  }

  addPhotoFormControl(): void {
    if (this.canAddPhotoFormControl()) {
      this.photosForm.push(this.createPhotoFormControl());
    }
  }

  removePhotoFormControl(index: number): void {
    this.photosForm.removeAt(index);
  }

}
