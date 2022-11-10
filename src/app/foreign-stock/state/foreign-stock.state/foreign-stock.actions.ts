import { Injectable } from "@angular/core";
import { createAction, props, Store } from "@ngrx/store";

const name = '[ForeignStock]';

export const setStockNames = createAction(`${name} Set Stock Names`, props<{ stockNames: string[] }>());


@Injectable({
    providedIn: 'root'
})
export class ForeignStockRaiseEvents {
    constructor(private store: Store) { }

    public setStockNames(stockNames: string[]): void {
        this.store.dispatch(setStockNames({ stockNames }));
    }
}