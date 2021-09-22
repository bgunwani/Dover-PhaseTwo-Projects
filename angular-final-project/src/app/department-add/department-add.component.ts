import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentComponent } from '../department/department.component';
import { Department } from '../models/department';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent implements OnInit {

  department: Department = new Department();

  constructor(private _departmentService: DepartmentService,
    private _rotuer: Router) { }

  ngOnInit(): void { }

  addDepartment() {
    this._departmentService.addDepartment(this.department).subscribe(result => {
      alert('Department Added Successfully.');
      this._rotuer.navigate(['/departments']);
    }, error => {
      console.log(error);
    })
  }

}
