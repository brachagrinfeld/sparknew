import { createReducer, on } from "@ngrx/store";
import { setStockNames } from "./foreign-stock.actions";
import { ForeignStockState } from "./foreign-stock.state";

export const foreignStockReducer = createReducer(
    new ForeignStockState(),
    on(setStockNames, (state, { stockNames }): ForeignStockState => {
        return {
            ...state,
            stockNames
        };
    }),
);