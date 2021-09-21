import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private _http: HttpClient,
    private _router: Router) { }

  ngOnInit(): void {
  }

  addEmployee() {
    this._http.post('http://localhost:3000/employees', this.employee).subscribe(result => {
      alert('Employee Added Successfully.')
      this._router.navigate(['/employees']);
    }, error => {
      console.log(error);
    })

  }

}
