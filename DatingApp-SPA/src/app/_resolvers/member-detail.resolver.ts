import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '../../../node_modules/@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from '../../../node_modules/rxjs/operators';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { User } from '../_models/user';

@Injectable()
export class MemberDetialResolver implements Resolve<User> {
  constructor(
    private userService: UserService,
    private router: Router,
    private alertify: AlertifyService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    return this.userService.getUser(route.params['id']).pipe(
      catchError(error => {
        this.alertify.error('Problems retreving data');
        this.router.navigate(['/members']);
        return of(null);
      })
    );
  }
}
