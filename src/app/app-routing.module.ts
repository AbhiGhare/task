import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'que1',
    loadChildren:()=>import("./questions1/questions1.module").then(m=>m.Questions1Module)
  },
  {
    path:'que2',
    loadChildren:()=>import("./questions2/questions2.module").then(m=>m.Questions2Module)
  },
  {
    path:'que3',
    loadChildren:()=>import("./questions3/questions3.module").then(m=>m.Questions3Module)
  },
  {
    path:'que4',
    loadChildren:()=>import("./questions4/questions4.module").then(m=>m.Questions4Module)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
