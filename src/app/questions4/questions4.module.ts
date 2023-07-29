import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Questions4RoutingModule } from './questions4-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopLeftComponent } from './top-left/top-left.component';
import { TopRightComponent } from './top-right/top-right.component';
import { BottomLeftComponent } from './bottom-left/bottom-left.component';
import { BottomRightComponent } from './bottom-right/bottom-right.component';
import { CenterComponent } from './center/center.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    TopLeftComponent,
    TopRightComponent,
    BottomLeftComponent,
    BottomRightComponent,
    CenterComponent
  ],
  imports: [
    CommonModule,
    Questions4RoutingModule,
    FormsModule
  ]
})
export class Questions4Module { }
