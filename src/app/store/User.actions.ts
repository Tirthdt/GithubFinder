import { createAction, props } from '@ngrx/store';

export const UserSearchRequest = createAction(
  '[USER] SEARCH REQUEST',
  props<{ name: string }>()
);

export const UserSearchSuccess = createAction(
  '[USER] SEARCH SUCCESS',
  props<{ userInfo: any }>()
);

export const UserSearchFail = createAction(
  '[USER] SEARCH FAIL',
  props<{ error: string }>()
);
