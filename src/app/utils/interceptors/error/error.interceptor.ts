import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthenticationService } from 'src/app/utils/services/authentication/authentication.service';
import { HttpService } from 'src/app/utils/services/http/http.service';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, flatMap } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private authenticationService: AuthenticationService,
    private httpService: HttpService,
    private router: Router
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        catchError((responseOne: any) => {
          if (responseOne.status === 401) {
            const value = { refreshToken: this.authenticationService.getAuthentication().refresh_token };
            return this.httpService.post('Profile/Token', value)
              .pipe(
                tap(() => this.authenticationService.unsetAuthentication()),
                flatMap((responseTwo: any) => {
                  this.authenticationService.setAuthentication(responseTwo.data, false);
                  req = req.clone({ setHeaders: { Authorization: `bearer ${responseTwo.data.access_token}` } });
                  return next.handle(req);
                }),
                catchError((responseTwo: any) => {
                  this.router.navigate(['/']);
                  return throwError(responseTwo.error);
                })
              );
          }
          return throwError(responseOne.error || responseOne);
        })
      );
  }

}
