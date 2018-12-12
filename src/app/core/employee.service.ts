import { Employee } from './../home/employee/employee.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { switchMap, map, mergeMap } from 'rxjs/operators';
import { Project } from '../home/project/project.interface';

const httOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url = '/app/employees';
  urlProject = '/app/projects';
  loadedCharacter: {};

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url);
  }

  addEmployee(employee: Employee): Observable<Employee[]> {
    return this.http.post(this.url, employee).pipe(
      switchMap(() => this.http.get<Employee[]>(this.url))
    );
  }

  editEmployee(id: number, employee: Employee): Observable<Employee[]> {
    const url = `${this.url}/${id}`;
    return this.http.put<Employee[]>(url, employee, httOptions).pipe(
      switchMap(() => this.http.get<Employee[]>(this.url))
    );
  }

  deleteEmployee(employee: Employee): Observable<Employee[]> {
    const url = `${this.url}/${employee.id}`;
    return this.http.delete<Employee[]>(url, httOptions).pipe(
      switchMap(() => this.http.get<Employee[]>(this.url))
    );
  }





}
