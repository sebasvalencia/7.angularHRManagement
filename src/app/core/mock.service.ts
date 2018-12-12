import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employee } from '../home/employee/employee.interface';
import { Project } from '../home/project/project.interface';

export class MocksService implements InMemoryDbService {
  createDb() {
    const employees: Employee[] = [
      { id: 1, name: 'Windstorm', age: 25, birthday: new Date, favoriteColor: '#FF8000', projectId: 1 },
      { id: 2, name: 'Bombasto', age: 25, birthday: new Date, favoriteColor: '#642EFE', projectId: 1 },
      { id: 3, name: 'Magneta', age: 25, birthday: new Date, favoriteColor: '#3ADF00', projectId: 1 },
      { id: 4, name: 'Tornado', age: 25, birthday: new Date, favoriteColor: '#FF0080', projectId: 1 },
      { id: 5, name: 'Professor X', age: 25, birthday: new Date, favoriteColor: '#0404B4', projectId: 1 },
      { id: 6, name: 'Wolverine', age: 25, birthday: new Date, favoriteColor: '#FA8258', projectId: 1 },
      { id: 7, name: 'Cyclops', age: 25, birthday: new Date, favoriteColor: '#A4A4A4', projectId: 1 },
    ];
    const projects: Project[] = [
      { id: 1, name: 'Project1', teamSize: 0, clientName: 'client1' },
      { id: 2, name: 'Project2', teamSize: 0, clientName: 'client1' },
      { id: 3, name: 'Project3', teamSize: 0, clientName: 'client1' },
      { id: 4, name: 'Project4', teamSize: 0, clientName: 'client2' },
      { id: 5, name: 'Project5', teamSize: 0, clientName: 'client2' },
      { id: 6, name: 'Project6', teamSize: 0, clientName: 'client2' },
      { id: 7, name: 'Project7', teamSize: 0, clientName: 'client3' },
    ];
    return { employees, projects };
  }
}
