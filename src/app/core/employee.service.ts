import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../home/employee/employee.interface';
import { switchMap } from 'rxjs/operators';
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

  constructor(private http: HttpClient) { }

  // getProyect(projects, employeeData) {
  //   console.log('projects', projects);
  //   return projects.filter(employee => employee.id === employeeData.projectId);
  // }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url);
  //  return this.http.get<Employee[]>(this.url).pipe(
  //     switchMap(employee => {
  //       return this.getProyect(this.http.get<Project[]>(this.urlProject).subscribe(() ), employee).map(e => {
  //         return Object.assign(employee, {employee: e});
  //       });
  //    })
  //   );
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
