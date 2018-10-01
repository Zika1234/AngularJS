import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService : LoginService, private router:Router ) { }

  ngOnInit() {
  }

  loginId:string;
  password:string;
  validate():void{
    this.loginService.getPassword(this.loginId).subscribe(data=>{if(data.credentials.passwd==this.password){this.router.navigateByUrl('insurancetype')}});
    
  }

}
