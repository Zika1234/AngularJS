import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

  // details:string;
  // pass:string;
  // students:any;

  // onSubmit():void{
   
  //  this.loginService.getDetails().subscribe(data=>this.students=data.student);
  //  console.log(this.students);
  // }

}
