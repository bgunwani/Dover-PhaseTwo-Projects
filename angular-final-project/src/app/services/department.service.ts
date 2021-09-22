import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../models/department';

@Injectable()
export class DepartmentService {

  constructor(private _http: HttpClient) { }

  getWelcomeMessage(): string {
    return "Manage Department";
  }

  getDepartments(): Observable<Department[]> {
    return this._http.get<Department[]>(`http://localhost:3000/departments`);
  }

  getDepartmentById(id: number): Observable<Department> {
    return this._http.get<Department>(`http://localhost:3000/departments/${id}`);
  }

  addDepartment(department: Department): Observable<Department> {
    return this._http.post<Department>(`http://localhost:3000/departments`, department);
  }

  updateDepartment(id: number, department: Department): Observable<Department> {
    return this._http.put<Department>(`http://localhost:3000/departments/${id}`, department)
  }

  deleteDepartment(id: number): Observable<Department> {
    return this._http.delete<Department>(`http://localhost:3000/departments/${id}`);
  }
}
