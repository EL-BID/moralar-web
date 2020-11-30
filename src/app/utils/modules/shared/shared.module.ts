import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MegaleiosFormsModule } from '../megaleios-forms/megaleios-forms.module';
import { NgxMaskModule } from 'ngx-mask';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageCropperModule } from 'ngx-image-cropper';

// components
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';
import { ListPaginationComponent } from './components/list-pagination/list-pagination.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { AddressViewComponent } from './components/address-view/address-view.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { ModalImageCropperComponent } from './components/modal-image-cropper/modal-image-cropper.component';

// directives
import { NgbdSortableHeaderDirective } from './directives/ngbd-sortable-header/ngbd-sortable-header.directive';

const DECLARATIONS: any[] = [
  // components
  CardComponent,
  ButtonComponent,
  ListPaginationComponent,
  ModalComponent,
  ModalConfirmComponent,
  AddressFormComponent,
  AddressViewComponent,
  ImageUploadComponent,
  ModalImageCropperComponent,
  // directives
  NgbdSortableHeaderDirective
];

@NgModule({
  declarations: DECLARATIONS,
  imports: [
    CommonModule,
    // modules
    FormsModule,
    ReactiveFormsModule,
    MegaleiosFormsModule,
    NgxMaskModule.forChild(),
    FontAwesomeModule,
    NgbPaginationModule,
    ImageCropperModule
  ],
  exports: DECLARATIONS
})
export class SharedModule { }
