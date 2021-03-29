import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {MegaleiosFormsModule} from '../../../../../../utils/modules/megaleios-forms/megaleios-forms.module';
import {SharedModule} from '../../../../../../utils/modules/shared/shared.module';
import {CURRENCY_MASK_CONFIG, CurrencyMaskModule} from 'ng2-currency-mask';
import {VideosComponent} from './videos.component';
// consts
import { CustomCurrencyMaskConfig } from 'src/app/app.module';
// containers
import {VideosListComponent} from './containers/videos-list/videos-list.component';
import {VideosAddComponent} from './containers/videos-add/videos-add.component';
import {VideosDetailsComponent} from './containers/videos-details/videos-details.component';

// components
import {VideoListComponent} from './components/video-list/video-list.component';
import {VideoListSearchComponent} from './components/video-list-search/video-list-search.component';
import {VideoFormComponent} from './components/video-form/video-form.component';
import {VideoViewComponent} from './components/video-view/video-view.component';
import {VideosRoutingModule} from './videos-routing.module';


@NgModule({
  declarations: [
    VideosComponent,
    // containers
    VideosListComponent,
    VideosAddComponent,
    VideosDetailsComponent,
    // components
    VideoListComponent,
    VideoListSearchComponent,
    VideoFormComponent,
    VideoViewComponent
  ],
  imports: [
    CommonModule,
    VideosRoutingModule,
    // modules
    ReactiveFormsModule,
    MegaleiosFormsModule,
    SharedModule,
    CurrencyMaskModule
  ],
  providers: [
    {
      provide: CURRENCY_MASK_CONFIG,
      useValue: CustomCurrencyMaskConfig
    }
  ]
})
export class VideosModule { }
