import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissingNumberComponent } from './missing-number/missing-number.component';

const routes: Routes = [
  {
    path:'',
    component:MissingNumberComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Questions1RoutingModule { }
