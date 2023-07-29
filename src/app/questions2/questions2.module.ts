import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Questions2RoutingModule } from './questions2-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentXComponent } from './component-x/component-x.component';
import { ComponentYComponent } from './component-y/component-y.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    ComponentXComponent,
    ComponentYComponent
  ],
  imports: [
    CommonModule,
    Questions2RoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class Questions2Module { }
