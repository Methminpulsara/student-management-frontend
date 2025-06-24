import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {CreateStudentComponent} from './create-student/create-student.component';
import {ManageStudentComponent} from './manage-student/manage-student.component';

export const routes: Routes = [

  {
    path: 'dashboard',
    component: DashboardComponent,
    children:[{
      path: '',
      component:CreateStudentComponent
    },{
      path: 'add',
      component: CreateStudentComponent
    },{
      path: 'manage',
      component:ManageStudentComponent
    }]
  }
];
