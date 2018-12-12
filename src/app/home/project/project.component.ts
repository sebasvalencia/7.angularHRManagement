import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectService } from 'src/app/core/project.service';
import { Project } from './project.interface';
import { MatTableDataSource, MatPaginator } from '@angular/material';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'teamSize', 'clientName', 'edit', 'delete'];
  dataSource = new MatTableDataSource<Project>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  form: FormGroup;

  id: number;
  name: string;
  teamSize: number;
  clientName: string;
  title = 'Project';

  showFormValue = false;
  nameButton = 'SAVE';
  option = 1;

  constructor(private fb: FormBuilder, private service: ProjectService) {

    this.form = this.fb.group({
      id: '',
      name: ['', Validators.required],
      teamSize: '',
      clientName: ['', Validators.required],
    });

    this.getProjects();
  }

  ngOnInit() { }

  getProjects() {
    this.service.getProjects().subscribe((data: Project[]) => {
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

    const project: Project = {
      name: this.form.get('name').value,
      teamSize: this.form.get('teamSize').value,
      clientName: this.form.get('clientName').value,
    };

    switch (this.option) {
      case 1:
        project['teamSize'] = 0;
        this.service.addProjects(project).subscribe((data: Project[]) => {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;
        });
        break;
      case 2:
        project['id'] = this.form.get('id').value;
        this.service.editProject(this.form.controls.id.value, project).subscribe((data: Project[]) => {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;
        });
        break;

      default:
        break;
    }
  }

  editProject(row) {

    this.showForm(2);

    this.form.patchValue({
      id: row.id,
      name: row.name,
      teamSize: row.teamSize,
      clientName: row.clientName,
    });
  }

  showForm(option: number) {

    this.form.patchValue({
      id: '',
      name: '',
      teamSize: '',
      clientName: '',
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

  deleteProject(row) {
    this.service.deleteProject(row).subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

}
