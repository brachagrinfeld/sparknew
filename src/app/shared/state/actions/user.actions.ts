import { createAction, props } from '@ngrx/store'
import { AuthData } from 'app/shared/model/auth-data.model';
import { Role } from 'app/shared/model/enums';

export const setAuthData = createAction('[Auth Service] Token', props<{ token: string, email: string }>());
export const setUserInfo = createAction('[Auth Service] Token', props<{ name: string, role: Role }>());
export const clearAuthData = createAction('[Auth Service] Logout');



