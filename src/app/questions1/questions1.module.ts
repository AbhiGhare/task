import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Questions1RoutingModule } from './questions1-routing.module';
import { MissingNumberComponent } from './missing-number/missing-number.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MissingNumberComponent
  ],
  imports: [
    CommonModule,
    Questions1RoutingModule,
    FormsModule
  ]
})
export class Questions1Module { }
