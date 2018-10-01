import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService,private router:Router) { }
  loginId:string;
  password:string;



  ngOnInit() {
  }

  onClick():void{
  //  alert("sdfhs");
    this.loginService.getPassword().subscribe(data=>{
    for(var i=0;i<data['Contestant'].length;i++)
    {if(data['Contestant'][i].password==this.password && data['Contestant'][i].loginId==this.loginId ){this.router.navigateByUrl('instruction')}}
    
    }
    )
  }
}
