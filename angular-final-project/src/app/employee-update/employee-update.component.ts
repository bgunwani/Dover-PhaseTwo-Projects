import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {

  id: any;
  employee: Employee = new Employee();

  constructor(private _route: ActivatedRoute,
    private _http: HttpClient,
    private _router: Router) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this._http.get<Employee>(`http://localhost:3000/employees/${this.id}`).subscribe(result => {
      this.employee = result;
    }, error => {
      console.log(error);
    })
  }

  updateEmployee() {
    this._http.put(`http://localhost:3000/employees/${this.id}`, this.employee).subscribe(result => {
      alert('Employee Updated Successfully.');
      this._router.navigate(['/employees']);
    }, error => {
      console.log(error);
    })
  }

}
