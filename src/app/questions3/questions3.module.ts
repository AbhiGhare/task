import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Questions3RoutingModule } from './questions3-routing.module';
import { PhoneNumberComponent } from './phone-number/phone-number.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PhoneNumberComponent
  ],
  imports: [
    CommonModule,
    Questions3RoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class Questions3Module { }
