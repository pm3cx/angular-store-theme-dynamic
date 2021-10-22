import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../../core';
import { SettingsComponent } from './components/settings.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: SettingsComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [SettingsComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class SettingsModule {}
