import { AuthData } from '../model/auth-data.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState, selectAuthDataCommonState } from 'app/app-state.index';
import { clearAuthData, setAuthData, setUserInfo } from '../state/actions/user.actions';
import { catchError, map, tap } from 'rxjs/operators';
import { LoginStatus, Role } from '../model/enums';
import { Observable, of, throwError } from 'rxjs';



@Injectable()
export class AppAuthService {

    private _authData: AuthData;

    constructor(private router: Router, private httpClient: HttpClient,
        private store: Store<AppState>) {
        this.store.select(selectAuthDataCommonState).subscribe((authData: AuthData) => {
            this._authData = authData;
        });

        // setTimeout(() => {
        //     this.initExpireSessionTimer();
        // }, 1);
    }
    //#region Private Members   
    sessionExpireIntervalMinutes = 5;
    refreshSessionTimer: any;
    //#endregion

    //#region Public getters

    get authToken(): string {
        return this._authData?.token;
    }
    get authEmail(): string {
        return this._authData?.email;
    }
    get authName(): string {
        return this._authData.name;
    }
    get SessionExpiry(): boolean {
        return !this.authToken;
    }
    get isLoggedOn(): boolean {
        return this.isSessionActive;
    }
    get isSessionActive(): boolean {
        return !this.SessionExpiry;
    }

    //#endregion

    //#region Public Methods
    refreshSession() {
        if (this.refreshSessionTimer) {
            clearInterval(this.refreshSessionTimer)
        }
        this.refreshSessionTimer = setTimeout(() => {
            clearInterval(this.refreshSessionTimer);
            this.clientLogout();
        }, this.sessionExpireIntervalMinutes * 60 * 1000);
    }
    login(request: { email: string, password: string }) {
        this.clearLogin();
        return this.httpClient.post<{
            status: LoginStatus,
            token: string,
            name: string,
            email: string
        }>('/auth/login', request).pipe(map((response) => {
            this.store.dispatch(setAuthData({ token: response.token, email: response.email }));
            return { status: response.status };
        }));
    }


    getOrLoadUserInfo(): Observable<{ email: string, name: string, role: Role }> {
        if (this.authName) {
            return of({ email: this.authEmail, name: this.authName, role: this._authData.role });
        } else {
            return this.loadUserInfo();
        }
    }

    loadUserInfo(): Observable<{ name: string, role: Role, email: string }> {
        return this.httpClient.get<{
            succeeded: boolean,
            role: Role,
            name: string,
        }>('/auth/getUserInfo').pipe(tap(async (response: any) => {
            if (response.succeeded) {
                this.store.dispatch(setUserInfo({ role: response.role, name: response.name }));
            }
        })).pipe(map(response => {
            return response.succeeded ? { role: response.role, name: response.name, email: this.authEmail } : null;
        }));
    }


    logout() {
        this.httpClient.post("/auth/logout", null).subscribe(() => {
            this.clientLogout();
        });
    }

    clientLogout() {
        this.clearLogin();
        this.router.navigate(['/login']);
    }


    //#endregion

    //#region Private Methods

    private initExpireSessionTimer() {
        this.httpClient.get('/auth/getSessionTimeInMinutes').subscribe((res: any) => {
            //this.sessionExpireIntervalMinutes = res.sessionExpireIntervalMinutes;
            this.sessionExpireIntervalMinutes = res;
            if (this.isLoggedOn) {
                this.refreshSession()
            }
        })
    }
    private clearLogin() {
        this.store.dispatch(clearAuthData());
    }
    //#endregion
}


