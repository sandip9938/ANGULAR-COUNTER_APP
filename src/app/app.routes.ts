import { Routes } from '@angular/router';
import { CounterApp } from './counter-app/counter-app';
import { Dashboard } from './dashboard/dashboard';
import { StudentMarksCalculator } from './student-marks-calculator/student-marks-calculator';

export const routes: Routes = [
  { path: '', component: Dashboard, title: 'Dashboard' },
  { path: 'counter', component: CounterApp, title: 'Counter' },
  {
    path: 'student-marks-calculator',
    component: StudentMarksCalculator,
    title: 'Student Marks Calculator',
  },
  { path: '**', redirectTo: '' },
];
