import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { UserService } from '../services/user.service';
import { map, delay, mergeMap, catchError, tap } from 'rxjs/operators';
import * as UserActions from './User.actions';

@Injectable()
export class UserEffect {
  constructor(private actions$: Actions, private userService: UserService) {}

  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.UserSearchRequest),
      delay(500),
      mergeMap((action) => {
        return this.userService.findUser(action.name).pipe(
          map((data: any) => {
            const d = localStorage.getItem('history');
            let ldata = [];
            if (d !== null) {
              ldata = JSON.parse(d);
            }
            if (!ldata.includes(data.login)) {
              ldata.push(data.login);
            }
            localStorage.setItem('history', JSON.stringify(ldata));
            return UserActions.UserSearchSuccess({ userInfo: data });
          }),
          catchError((err) => of(UserActions.UserSearchFail({ error: err })))
        );
      })
    )
  );
}
