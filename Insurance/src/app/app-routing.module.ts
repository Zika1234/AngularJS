import { NgModule } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import{InsuranceTypeComponent} from './insurance-type/insurance-type.component';
import {CarTypeComponent} from './car-type/car-type.component';

const routes:Routes = [
  {path:'login', component:LoginComponent},
  {path:'insurancetype', component:InsuranceTypeComponent},
  {path:'car-type', component:CarTypeComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports : [RouterModule]
  
  
})
export class AppRoutingModule { }

