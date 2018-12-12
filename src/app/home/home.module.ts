import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProjectComponent } from './project/project.component';
import { HomeRoutingModule } from './home-routing.module';
import {
  MatTableModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatInputModule,
  MatButtonModule,
  MatGridListModule,
  MatToolbarModule,
  MatPaginatorModule,
  MatTooltipModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [DashboardComponent, EmployeeComponent, ProjectComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    HomeRoutingModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatPaginatorModule,
    MatTooltipModule
  ]
})
export class HomeModule { }
