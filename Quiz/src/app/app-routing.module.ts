import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {InstructionComponent} from './instruction/instruction.component';
import {QuestionsComponent} from './questions/questions.component';
import{ResultComponent} from './result/result.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'instruction', component:InstructionComponent},
  {path:'questions',component:QuestionsComponent},
  {path:'result',component:ResultComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],

    exports: [ RouterModule ]
 
})
export class AppRoutingModule { }