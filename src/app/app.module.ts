import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Question1Component } from './question1/question1.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HomeModule } from './home/home.module';
import { Comp1Component } from './home/comp1/comp1.component';
import { Comp2Component } from './home/comp2/comp2.component';
import { Comp3Component } from './home/comp3/comp3.component';
import { HomeComponent } from './home/home/home.component';
import { Comp4Component } from './home/comp4/comp4.component';
import { Comp5Component } from './home/comp5/comp5.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    Question1Component],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
