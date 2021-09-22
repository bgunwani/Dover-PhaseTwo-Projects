import { Component, OnInit } from '@angular/core';
import { Department } from '../models/department';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  message: string = "";
  departmentList: Array<Department> = [];

  constructor(private _departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.message = this._departmentService.getWelcomeMessage();
    this._departmentService.getDepartments().subscribe(result => {
      this.departmentList = result;
    }, (error) => {
      console.log(error);
    })
  }

}
