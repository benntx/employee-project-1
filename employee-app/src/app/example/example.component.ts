import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  today: number = Date.now();
  curr: number = 100.45;
  pi: number = 3.14159265359;
  employee: Object = { id: 12768733, fname: 'John', lname: 'Tucker', dateofbirth: '12/31/77', salary: 5400, email: 'john@gmail.com'}
  worker: string[] = ['John', 'Tucker', 'john@gmail.com'];
  worker_name: string = this.worker[0];
}
