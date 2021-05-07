import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {StatsComponent} from './stats/stats.component';

const routes: Routes = [
  {path : '', redirectTo: 'admin' , pathMatch: 'full'},
  {path : 'home', component: HomeComponent},
  {path : 'admin', component: AdminComponent},
  {path : 'stats', component: StatsComponent },
  {
    path: '**',
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
