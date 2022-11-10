import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';

@Injectable()
export class CanLeaveComponentGuard implements CanDeactivate<ComponentCanDeactivate> {
    constructor() { }
    
    canDeactivate(component: ComponentCanDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        if (component) {
            let promise = component.canDeactivate();
            promise.then(r => {
            })
            return promise;
        } else {
            return true;
        }
    }



}

export interface ComponentCanDeactivate {
    canDeactivate: () => Promise<boolean>;
}