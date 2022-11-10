export interface IForeignStockState {
    stockNames: string[];
}

export class ForeignStockState implements IForeignStockState {
    stockNames: string[];
    constructor() {
        this.stockNames = [];
    }
}