import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../home/employee/employee.interface';
import { switchMap } from 'rxjs/operators';

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
