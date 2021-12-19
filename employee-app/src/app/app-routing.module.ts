import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesRoutingComponent } from './employees-routing/employees-routing.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: 'home', component: DashboardComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'employees-routing', component: EmployeesRoutingComponent }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})

export class AppRoutingModule { }
