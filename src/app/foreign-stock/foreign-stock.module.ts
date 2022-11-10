import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForeignStockLayoutComponent } from './components/foreign-stock-layout/foreign-stock-layout.component';
import { ForeignStockRoutingModule } from './foreign-stock-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { TryComponent } from './components/try/try.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { StoreModule } from '@ngrx/store';
import { CoreFeatures } from 'app/core/core-features.enum';
import { foreignStockReducer } from './state/foreign-stock.state/foreign-stock.reducer';



@NgModule({
  declarations: [
    ForeignStockLayoutComponent,
    TryComponent,
    TopBarComponent
  ],
  imports: [
    CommonModule,
    ForeignStockRoutingModule,
    StoreModule.forFeature(CoreFeatures.ForeignStock, foreignStockReducer),
  ]
})
export class ForeignStockModule { }
