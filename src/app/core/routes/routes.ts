
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    {
        path: 'dashboard',
        loadChildren: () => import('../../modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
    },
    {
        path: 'settings',
        loadChildren: () => import('../../modules/settings/settings.module').then((m) => m.SettingsModule),
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }