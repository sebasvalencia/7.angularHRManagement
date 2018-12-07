import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {
  MatTableModule, MatIconModule, MatCardModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule,
  MatInputModule, MatButtonModule
} from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { MocksService } from './mock.service';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MocksService),
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule

  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
