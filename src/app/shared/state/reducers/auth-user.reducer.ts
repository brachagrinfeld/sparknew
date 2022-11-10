import * as UserActions from '../actions/user.actions';
import { createReducer, on, Action, createFeatureSelector } from '@ngrx/store';
import { AUTH_DATA_STATE_KEY, LAST_CONNECTED_EMAIL } from '../../model/local-storage-keys';
import { AuthData } from '../../model/auth-data.model';


const lastAuthToken = localStorage.getItem(AUTH_DATA_STATE_KEY)||'';
const lastAuthEmail = localStorage.getItem(LAST_CONNECTED_EMAIL)||'';


export interface AuthUserState {
    authData:AuthData;
}
let initialState: AuthUserState = {
    authData: { email: lastAuthEmail, token: lastAuthToken },
}

const createUserReducer = createReducer(
    initialState,

    on(UserActions.setAuthData, (state, { token, email }) => {
        localStorage.setItem(AUTH_DATA_STATE_KEY, token);
        localStorage.setItem(LAST_CONNECTED_EMAIL, email);
        return { ...state, authData: { token, email } };
    }),
    on(UserActions.setUserInfo, (state, { name, role }) => {
        return { ...state, authData: { ...state.authData, name, role } };
    }),
    on(UserActions.clearAuthData, (state) => {
        localStorage.removeItem(AUTH_DATA_STATE_KEY);
        return { ...state, authData: { email: lastAuthEmail, name: '',role:undefined,  token: '' } };
    }),
);


export function userReducer(state: AuthUserState | undefined, action: Action) {
    return createUserReducer(state, action);
}

