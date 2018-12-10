import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/core/employee.service';
import { Employee } from './employee.interface';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'age', 'birthday', 'favoriteColor', 'projectId', 'edit', 'delete'];
  dataSource = new MatTableDataSource<Employee>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  form: FormGroup;
  showFormValue = false;
  nameButton = 'SAVE';
  option = 1;

  constructor(private fb: FormBuilder, private service: EmployeeService) {

    this.form = this.fb.group({
      id: '',
      name: ['', Validators.required],
      age: ['', Validators.required],
      birthday: ['', Validators.required],
      favoriteColor: ['', Validators.required],
      projectId: ''
    });

    // this.service.getData();
    this.getEmployees();
  }

  ngOnInit() { }

  getEmployees() {
    this.service.getEmployees().subscribe((data: Employee[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  onSubmit() {

    if (this.nameButton === 'SAVE') {
      this.option = 1;
    } else {
      this.option = 2;
    }

    const employee: Employee = {
      name: this.form.get('name').value,
      age: this.form.get('age').value,
      birthday: this.form.get('birthday').value,
      favoriteColor: this.form.get('favoriteColor').value,
      projectId: this.form.get('projectId').value
    };

    switch (this.option) {
      case 1:
        this.service.addEmployee(employee).subscribe((data: Employee[]) => {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;
        });
        break;
      case 2:
        employee['id'] = this.form.get('id').value;
        this.service.editEmployee(this.form.controls.id.value, employee).subscribe((data) => {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;
        });
        break;

      default:
        break;
    }
  }

  editEmployee(row) {

    this.showForm(2);

    this.form.patchValue({
      id: row.id,
      name: row.name,
      age: row.age,
      birthday: row.birthday,
      favoriteColor: row.favoriteColor,
      projectId: row.projectId
    });
  }

  showForm(option: number) {

    this.form.patchValue({
      id: '',
      name: '',
      age: '',
      birthday: '',
      favoriteColor: '',
      projectId: ''
    });

    switch (option) {
      case 1: this.nameButton = 'SAVE';
        break;

      case 2: this.nameButton = 'EDIT';
        break;
      default: this.nameButton = 'SAVE';
        break;
    }
    this.showFormValue = !this.showFormValue;
  }

  deleteEmployee(row) {
    this.service.deleteEmployee(row).subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }



}
