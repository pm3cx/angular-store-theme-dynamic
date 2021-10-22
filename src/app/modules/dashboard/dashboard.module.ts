import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../../core';
import { DashboardComponent } from './components/dashboard.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class DashboardModule {}
