import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})


export class EmployeesComponent implements OnInit {

  employee: Employee = {
    id: 318033743,
    fname: 'Alex',
    lname: 'Gorbachov',
    dateofbirth: "31/12/1977",
    salary: '3,000 USD',
    email: 'alexpitronot@gmail.com'
  };

  employee1: Employee = {
    id: 27261611,
    fname: 'Rotem',
    lname: 'Malul',
    dateofbirth: "30/12/1967",
    salary: '4,000 USD',
    email: 'rotem@gmail.com'
  };

  employee2: Employee = {
    id: 27266701,
    fname: 'Jack',
    lname: 'Daniels',
    dateofbirth: "30/12/1947",
    salary: '5,000 USD',
    email: 'jack@gmail.com'
  };

  employee3: Employee = {
    id: 14331611,
    fname: 'Aviva',
    lname: 'Berg',
    dateofbirth: "30/12/1987",
    salary: '5,000 USD',
    email: 'aviva@gmail.com'
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
