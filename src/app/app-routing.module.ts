import { Component, NgModule } from '@angular/core';
import {RouterModule, Routes} from  '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './peges/dashboard/dashboard.component';
import { Grafica1Component } from './peges/grafica1/grafica1.component';
import { NopegesfoundComponent } from './peges/nopegesfound/nopegesfound.component';
import { PegesComponent } from './peges/peges.component';
import { ProgressComponent } from './peges/progress/progress.component';

const routes: Routes = [
{path:  '', 
component: PegesComponent,
children: [
  {path:  'dashboard', component: DashboardComponent},
  {path:  'progress', component:ProgressComponent},
  {path:  'grafica1', component:Grafica1Component},
  {path:  '', redirectTo:   '/dashboard', pathMatch:  'full'},
]
},

{path:  'login', component:LoginComponent},
{path:  'register',component:RegisterComponent},
{path:  '**', component:NopegesfoundComponent},

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
