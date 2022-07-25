import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './Mycomponent/first/first.component';
import { SecondComponent } from './Mycomponent/second/second.component';

const routes: Routes = [
  {path:"form",component:FirstComponent},
  {path:"dashboard",component:SecondComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

