import { createReducer, on } from '@ngrx/store';
import * as UserActions from './User.actions';

interface State {
  loading: boolean;
  userInfo: any;
  error: string;
}

const initialState: State = {
  loading: false,
  userInfo: null,
  error: '',
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.UserSearchRequest, (state: State) => ({
    userInfo: null,
    error: '',
    loading: true,
  })),
  on(UserActions.UserSearchSuccess, (state: State, { userInfo }) => ({
    ...state,
    loading: false,
    userInfo: userInfo,
  })),
  on(UserActions.UserSearchFail, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  }))
);
