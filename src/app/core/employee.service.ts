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

  getData() {




    const cars = this.http.get(this.url);
    const bikes = this.http.get(this.urlProject);

    // cars.pipe(
    //   switchMap((s: Employee) => {
    //     return this.getS(s.projectId, bikes).map(u => {
    //       return Object.assign(s, { u: u });
    //     });
    //   })
    // ).subscribe(console.log);

    //  return forkJoin([cars, bikes]).pipe(
    //    map(responses => {
    //      console.log('responses[0]: ', responses[0]);
    //    })
    //  );

    // return this.http.get(this.url).pipe(
    //   map((val: Employee) => {
    //     return this.http.get(this.urlProject).subscribe((val2: Project) =>{
    //       if (val.projectId === val2.id) {
    //         console.log('val', val, 'val2', val2);
    //       }
    //     });
    //   })

    // );


  }



  //  getS(employeeData, projects) {
  //    console.log('projects123:', projects);
  //    return projects.filter(project => project.id === employeeData);
  // }

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
