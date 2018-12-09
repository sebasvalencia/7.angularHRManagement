import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project/project.component';
import { EmployeeComponent } from './employee/employee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, canActivate: [AuthenticationGuard]},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'dashboard/:username', component: DashboardComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'project', component: ProjectComponent},
  {path: 'logout', component: LoginComponent},
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
