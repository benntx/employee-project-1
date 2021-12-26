import { NgModule } from '@angular/core'; //default
import { BrowserModule } from '@angular/platform-browser'; //default
import { AppComponent } from './app.component'; //*
import { EmployeesComponent } from './employees/employees.component'; //*
import { FormsModule } from '@angular/forms'; //forms
import { FooterComponent } from './footer/footer.component'; //*
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component'; //*
import { MessagesComponent } from './messages/messages.component'; //*
import { AppRoutingModule } from './app-routing.module'; //*
import { DashboardComponent } from './dashboard/dashboard.component'; //*
import { EmployeesRoutingComponent } from './employees-routing/employees-routing.component'; //*
import { HttpClientModule } from '@angular/common/http'; //routing
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'; //*
import { InMemoryDataService } from './in-memory-data.service'; //*
import { EmployeeSearchComponent } from './employee-search/employee-search.component'; //*
import { ExampleComponent } from './example/example.component'; //*

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    FooterComponent,
    EmployeeDetailComponent,
    MessagesComponent,
    DashboardComponent,
    EmployeesRoutingComponent,
    EmployeeSearchComponent,
    ExampleComponent,     
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
