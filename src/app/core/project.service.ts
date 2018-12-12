import { Project } from '../home/project/project.interface';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

const httOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  url = '/app/projects';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.url);
  }

  addProjects(project: Project): Observable<Project[]> {
    return this.http.post(this.url, project).pipe(
      switchMap(() => this.http.get<Project[]>(this.url))
    );
  }

  editProject(id: number, project: Project): Observable<Project[]> {
    console.log('proj', project);
    const url = `${this.url}/${id}`;
    return this.http.put<Project[]>(url, project, httOptions).pipe(
      switchMap(() => this.http.get<Project[]>(this.url))
    );
  }

  deleteProject(project: Project): Observable<Project[]> {
    const url = `${this.url}/${project.id}`;
    return this.http.delete<Project[]>(url, httOptions).pipe(
      switchMap(() => this.http.get<Project[]>(this.url))
    );
  }

}
