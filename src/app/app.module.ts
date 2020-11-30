import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// locale
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt, 'pt');

// modules
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MegaleiosAlertModule } from './utils/modules/megaleios-alert/megaleios-alert.module';
import { NgxMaskModule } from 'ngx-mask';

// interceptors
import { JsonWebTokenInterceptor } from 'src/app/utils/interceptors/json-web-token/json-web-token.interceptor';
import { ErrorInterceptor } from 'src/app/utils/interceptors/error/error.interceptor';

// containers
import { AppComponent } from './app.component';
import { CurrencyMaskConfig } from 'ng2-currency-mask';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: 'left',
  allowNegative: true,
  decimal: ',',
  precision: 2,
  prefix: 'R$ ',
  suffix: '',
  thousands: '.'
};

@NgModule({
  declarations: [
    // containers
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // modules
    HttpClientModule,
    MegaleiosAlertModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    // locale
    { provide: LOCALE_ID, useValue: 'pt' },
    // interceptors
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JsonWebTokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
