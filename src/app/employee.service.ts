import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee.interface';
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

  addEmployee(employee: Employee) {
    return this.http.post(this.url, employee).pipe(
      switchMap(() => this.http.get<Employee[]>(this.url))
    );
  }

  editEmployee(row) {
    const url = `${this.url}/${row.id.value}`;
    return this.http.put<Employee[]>(url, { id: row.id.value, name: row.name.value }, httOptions).pipe(
      switchMap(() => this.http.get<Employee[]>(this.url))
    );
  }

  deleteEmployee(employee: Employee) {
    const url = `${this.url}/${employee.id}`;
    return this.http.delete<Employee[]>(url, httOptions).pipe(
      switchMap(() => this.http.get<Employee[]>(this.url))
    );
  }

}
