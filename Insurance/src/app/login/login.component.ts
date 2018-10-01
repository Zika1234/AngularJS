import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }
  loginId : string  ;
  password : string ;
  validate():void{
      this.loginService.getPasswd(this.loginId)
      .subscribe(data=>{if(data.credentials.passwd==this.password){alert('succ')}});
  }
}
