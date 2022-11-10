import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';

const routes: Routes = [
    {
    path: '', component: MainLayoutComponent, 
    children: [
        { path: 'foreign-stock', loadChildren: () => import('app/foreign-stock/foreign-stock.module').then(m => m.ForeignStockModule) },
        { path: '**', redirectTo: 'foreign-stock' }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
