import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';

import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesRoutingComponent } from './employees-routing/employees-routing.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    FooterComponent,
    EmployeeDetailComponent,
    MessagesComponent,
    DashboardComponent,
    EmployeesRoutingComponent,     
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
