import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home/home.component';
import { Question1Component } from './question1/question1.component';


const routes: Routes = [
  {
    path:'',
    component: DashboardComponent
  },
  {
    path:'question1',
    component:Question1Component
  },
  {
    path:'question4',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
