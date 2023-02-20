import { createAction, props } from '@ngrx/store';
import { User } from '../models/user';
import { UsersEntity } from './users.models';


export const buildUserSession = createAction('[Users] Build User Session');

// export const initUsers = createAction('[Users Page] Init');

export const buildUserSessionSuccess = createAction(
  '[User] Build User Session Success',
  props<{ user: User }>()
);

export const buildUserSessionFailed = createAction(
  '[User] Build User Session Failed'
);
