import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForeignStockLayoutComponent } from './components/foreign-stock-layout/foreign-stock-layout.component';
import { TryComponent } from './components/try/try.component';

const routes: Routes = [
    {
    path: '', component: ForeignStockLayoutComponent, 
    children: [
        { path: '', component:TryComponent },
        { path: '**', redirectTo: '' }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForeignStockRoutingModule { }
