import { Injectable } from "@angular/core";
import { createFeatureSelector, createSelector, Store } from "@ngrx/store";
import { CoreFeatures } from "app/core/core-features.enum";
import { Observable } from "rxjs";
import { IForeignStockState } from "./foreign-stock.state";


export const getForeignStockState = createFeatureSelector<IForeignStockState>(
    CoreFeatures.ForeignStock
);

export const selectStockNames = createSelector(getForeignStockState, (state) => {
    if (state) return state.stockNames;
    return null;
});

@Injectable({
    providedIn: 'root'
  })
export class ForeignStockEventListener {
    constructor(private store: Store) { }

    public selectStockNames(): Observable<string[]> {
        return this.store.select(selectStockNames);
    }
}
