import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employee } from './employee.interface';

export class MockEmployeesService implements InMemoryDbService {
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
    return { employees };
  }
}
