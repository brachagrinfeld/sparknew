import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { SharedModule } from 'app/shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';



@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule.forRootOrChild(),
    CoreRoutingModule
  ]
})
export class CoreModule { }
