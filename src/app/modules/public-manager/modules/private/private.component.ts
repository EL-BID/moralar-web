import { Component, OnInit, OnDestroy } from '@angular/core';
import { OnDestroyClass } from 'src/app/utils/classes/on-destroy.class';
import {
  faTachometerAlt,
  faHouseUser,
  faCalendarAlt,
  faIdCard,
  faHome,
  faStar,
  faMap,
  faQuestionCircle,
  faBook
} from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/utils/services/user/user.service';
import { HttpService } from 'src/app/utils/services/http/http.service';
import { AuthenticationService } from 'src/app/utils/services/authentication/authentication.service';
import { MegaleiosAlertService } from 'src/app/utils/modules/megaleios-alert/megaleios-alert.service';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.sass']
})
export class PrivateComponent extends OnDestroyClass implements OnInit, OnDestroy {

  faTachometerAlt = faTachometerAlt;
  faHouseUser = faHouseUser;
  faCalendarAlt = faCalendarAlt;
  faIdCard = faIdCard;
  faHome = faHome;
  faStar = faStar;
  faMap = faMap;
  faQuestionCircle = faQuestionCircle;
  faBook = faBook;

  user: any;

  constructor(
    private userService: UserService,
    private httpService: HttpService,
    private authenticationService: AuthenticationService,
    private megaleiosAlertService: MegaleiosAlertService,
    private router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.userService.user
      .pipe(takeUntil(this.onDestroy))
      .subscribe((user: any) => {
        if (user) {
          this.user = user;
        } else {
          this.httpService.get('PublicManager/GetInfo')
            .pipe(takeUntil(this.onDestroy))
            .subscribe((response: any) => this.userService.user = response.data);
        }
      });
  }

  ngOnDestroy(): void {
    this.authenticationService.unsetAuthentication();
    this.userService.user = null;
    this.megaleiosAlertService.success('Você saiu com sucesso.');
    this.onDestroy.next();
  }

  logOut(): void {
    this.router.navigate(['/gestor-publico']);
  }

}
